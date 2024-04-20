const express = require("express")
const server = express();
const mongoose = require("mongoose")
server.use(express.json())
const cors = require('cors')

const mongoURL = "mongodb+srv://j3remyz1on:Pm12duvQmpReJgb6@cluster0.0sqyiib.mongodb.net/hr-sia-database"
const path = require('path')
const fs = require('fs')

server.use(cors())

//Mongodb Connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to database");
}).catch(e => {
    console.error("Error connecting to database:", e);
});

//Multer
const maxSize = 10 * 1024 * 1024

const multer = require('multer')
const storageRecruit = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../public/files'));
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + '_' + file.originalname);
    }
});

const storageEmployee = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../public/files/employeefiles'));
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + '_' + file.originalname);
    }
});

const upload = multer({
    storage: storageRecruit,
    limits: {fileSize: maxSize}
})

const employeeUpload = multer({
    storage: storageEmployee,
    limits: {fileSize: maxSize}
})

//Check Connection
server.listen(5000, ()=>{
    console.log("Server Started")
})

//Schema Import
require("./models/recruitmentdetails")
require("./models/employeedetails")
const recruit = mongoose.model("RecruitInfo")
const employee =mongoose.model("EmployeeInfo")

function getRelativePath(absolutePath) {
    const rootDir = path.join(__dirname, '../public');
    const relativePath = path.relative(rootDir, absolutePath);
    return relativePath;
}

function getEmployeeRelativePath(absolutePath) {
    const rootDir = path.join(__dirname, '../public');
    const relativePath = path.relative(rootDir, absolutePath);
    const employeeFilesDir = path.join('files', 'employeefiles');
    return path.join(employeeFilesDir, relativePath);
}


// Recruitment
//Add
server.post("/recruit", upload.fields([{ name: 'file' }, { name: 'picture' }]), async(req, res) =>{
    const { name, position, status, contact } = req.body;
    const { file, picture } = req.files;
    try{
        await recruit.create({
            recruitFullName: name,
            desiredProfession: position,
            recruitmentStatus: status,
            recruitContactInfo: contact,
            pdf: getRelativePath(file[0].path), 
            recruitPicture: getRelativePath(picture[0].path)
        })
        res.send({status:"Ok"})
    }catch (error){
        res.send({status: "Error"})
    }
})

// Get
server.get("/recruit", async (req, res) => {
    try {
      const recruitmentData = await recruit.find();
      res.json(recruitmentData)
    } catch (error) {
      console.error("Error fetching recruitment data:", error)
      res.status(500).json({ error: "Internal server error" })
    }
  });

// Get most recent applicants
server.get("/recent-applicants", async (req, res) => {
    try {
      const recentApplicants = await recruit.find().sort({ _id: -1 }).limit(7); // Sort by _id in descending order and limit to 4
      res.json(recentApplicants);
    } catch (error) {
      console.error("Error fetching recent applicants:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  //Update
  server.put('/recruit/:id', upload.fields([{ name: 'file' }, { name: 'picture' }]), async (req, res) => {
    try {
        const { id } = req.params;

        const { name, position, status, contact } = req.body;

        const { file, picture } = req.files || {};
        const pdfPath = file ? getRelativePath(file[0].path) : req.body.pdf;
        const picturePath = picture ? getRelativePath(picture[0].path) : req.body.recruitPicture;

        const update = {
            recruitFullName: name,
            desiredProfession: position,
            recruitmentStatus: status,
            recruitContactInfo: contact,
            pdf: pdfPath,
            recruitPicture: picturePath
        };

        const updatedRecruit = await recruit.findByIdAndUpdate(id, update, { new: true });

        if (!updatedRecruit) {
            console.log("Recruit not found");
            return res.status(404).json({ message: "Not Found" });
        }

        res.status(200).json(updatedRecruit);
    } catch (error) {
        console.error("Error updating recruit:", error);
        res.status(500).json({ message: error.message });
    }
})

// Delete
server.delete('/recruit/:id', async (req, res) => {
    try {
        const { id } = req.params

        console.log("Received DELETE request for recruit with ID:", id)

        const recruitToDelete = await recruit.findById(id);

        if (!recruitToDelete) {
            console.log("Recruit not found")
            return res.status(404).json({ message: "Recruit not found" })
        }

        const picturePath = path.join(__dirname, '../public', recruitToDelete.recruitPicture)
        const pdfPath = path.join(__dirname, '../public', recruitToDelete.pdf)

        fs.unlinkSync(picturePath)
        console.log("Picture file deleted successfully")

        fs.unlinkSync(pdfPath);
        console.log("Resume file deleted successfully")

        const deletedRecruit = await recruit.findByIdAndDelete(id)

        console.log("Recruit deleted successfully from the database")

        res.status(200).json({ message: "Recruit deleted successfully" })
    } catch (error) {
        console.error("Error deleting recruit:", error)
        res.status(500).json({ message: error.message })
    }
})

//End of Recruitment

//Employee Record
//Add
server.post("/employee", employeeUpload.single('picture'), async (req, res) => {
    const { name, position, bday, gender, address, email, contact, team, absences, presents, socials1, socials2, socials3, employeedSince, salary, ID } = req.body;
    const picturePath = req.file ? getEmployeeRelativePath(req.file.path) : null;

    try {
        await employee.create({
            employeeID: ID,
            employeeFullName: name,
            employeeProfession: position,
            employeeDateofBirth: bday,
            employeeAddress: address,
            employeeGender: gender,
            employeeEmail: email,
            employeeContactInfo: contact,
            employeeTeam: team,
            employeeAbsences: absences,
            employeePresents: presents,
            employeeSocialLink1: socials1,
            employeeSocialLink2: socials2,
            employeeSocialLink3: socials3,
            dateStarted: employeedSince,
            employeeSalary: salary,
            employeeImage: picturePath
        });
        res.send({ status: "Ok" });
    } catch (error) {
        console.error(error);
        res.send({ status: "Error" });
    }
});

//Get
server.get("/employee", async (req, res) => {
    try {
        const employeesData = await employee.find();
        res.json(employeesData);
    } catch (error) {
        console.error("Error fetching employee data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

//Edit
server.put("employee/:id", employeeUpload.single('picture'), async (req, res) => {
    try{
        const { id } = req.params
        const { name, position, bday, gender, address, email, contact, team, absences, presents, socials1, socials2, socials3, employeedSince, salary, ID } = req.body;
        const picturePath = req.file ? getEmployeeRelativePath(req.file.path) : null;

        const employee = await Employee.findById(id);

        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        employee.name = name;
        employee.position = position;
        employee.bday = bday;
        employee.gender = gender;
        employee.address = address;
        employee.email = email;
        employee.contact = contact;
        employee.team = team;
        employee.absences = absences;
        employee.presents = presents;
        employee.socials1 = socials1;
        employee.socials2 = socials2;
        employee.socials3 = socials3;
        employee.employeedSince = employeedSince;
        employee.salary = salary;
        employee.ID = ID;
        if (picturePath) {
            employee.picturePath = picturePath;
        }

        await employee.save();

        res.status(200).json({ message: "Employee updated successfully" });

    } catch (error) {
        console.error("Error updating recruit:", error);
        res.status(500).json({ message: error.message });
    }
});