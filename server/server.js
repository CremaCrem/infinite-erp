const express = require("express")
const server = express();
const mongoose = require("mongoose")
server.use(express.json())
const cors = require('cors')

// const mongoURL = "mongodb+srv://j3remyz1on:Pm12duvQmpReJgb6@cluster0.0sqyiib.mongodb.net/hr-sia-database"
const mongoURL = process.env.MONGO_URL;
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
const { Product, Sale } = require("./models/productdetails");
require("./models/recruitmentdetails")
require("./models/employeedetails")
require("./models/relationdetails")
require("./models/providedCourses")

//Model
const recruit = mongoose.model("RecruitInfo")
const employee = mongoose.model("EmployeeInfo")
const complaints = mongoose.model("Complaints")
const programs = mongoose.model("TrainingProgram")

function getRelativePath(absolutePath) {
    const rootDir = path.join(__dirname, '../public');
    const relativePath = path.relative(rootDir, absolutePath);
    return relativePath;
}

function getEmployeeRelativePath(absolutePath) {
    const rootDir = path.join(__dirname, '../public');
    const relativePath = path.relative(rootDir, absolutePath);
    return relativePath;
}

// Human Resources
// Recruitment
// Add
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
      const recentApplicants = await recruit.find().sort({ _id: -1 }).limit(7);
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
server.put("/employee/:id", employeeUpload.single('picture'), async (req, res) => {
    try {
        const { id } = req.params;
        const { name, profession, bday, gender, address, email, contact, team, absences, presents, socials1, socials2, socials3, employeedSince, salary, ID } = req.body;
        const picture = req.file; 

        
        const picturePath = picture ? getRelativePath(picture.path) : req.body.employeeImage;

        
        const updatedEmployee = await employee.findByIdAndUpdate(id, {
            employeeID: ID,
            employeeFullName: name,
            employeeProfession: profession,
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
        }, { new: true });

        if (!updatedEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.status(200).json(updatedEmployee);
    } catch (error) {
        console.error("Error updating employee:", error);
        res.status(500).json({ message: error.message });
    }
});

server.delete('/employee/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const employeeToDelete = await employee.findById(id);

        if (!employeeToDelete) {
            return res.status(404).json({ message: "Employee not found" });
        }

        const imagePath = path.join(__dirname, '../public', employeeToDelete.employeeImage);


        fs.unlinkSync(imagePath);
        console.log("Image file deleted successfully");


        await employee.findByIdAndDelete(id);
        console.log("Employee deleted successfully from the database");

        return res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error) {
        console.error("Error deleting employee:", error);
        return res.status(500).json({ message: error.message });
    }
});
//End of Employee

//Complaints
//Add
server.post("/relations", async (req, res) => {
    const { subject, description, reporter, date } = req.body;
    try {
        const newComplaint = await complaints.create({
            subject,
            description,
            date,
            status: 'Open',
            reporter,
        });
        res.status(201).json(newComplaint);
    } catch (error) {
        console.error("Error adding complaint:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

//Get
server.get("/relations", async (req, res) => {
    try {
        const allComplaints = await complaints.find();
        res.status(200).json(allComplaints);
    } catch (error) {
        console.error("Error fetching complaints:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Put
server.put('/relations/:id', async (req, res) => {
    const { id } = req.params; 
    const { subject, description, date, status, reporter } = req.body; 
  
    try {
      const updatedComplaint = await complaints.findByIdAndUpdate(
        id,
        { subject, description, date, status, reporter },
        { new: true }
      );
  
      if (!updatedComplaint) {
        return res.status(404).json({ error: 'Complaint not found' });
      }
  
      // Return the updated complaint as the response
      res.json(updatedComplaint);
    } catch (error) {
      console.error('Error updating complaint:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
// End of Complaints

// Training
// Add
server.post("/training-programs", async (req, res) => {
    try {
        const { name, description, enrolledEmployees } = req.body;

        const trainingProgram = new programs({
            name,
            description,
            enrolledEmployees: enrolledEmployees || [] 
        });

        await trainingProgram.save();

        res.status(201).json(trainingProgram);
    } catch (error) {
        console.error("Error creating training program:", error);
        res.status(500).json({ error: "An error occurred while creating the training program" });
    }
});

// Enrolling Employee to a Program
server.post('/training-programs/enroll', async (req, res) => {
    try {
        const { program, employee } = req.body;
        const newProgram = new programs({ name: program, enrolledEmployees: [employee] });

        await newProgram.save();

        res.status(201).send("Enrollment successful");
    } catch (error) {
        console.error('Error enrolling employee:', error);
        res.status(500).send("Error enrolling employee");
    }
});

// Get training programs
server.get("/training-programs", async (req, res) => {
    try {
        const trainingPrograms = await programs.find().populate('enrolledEmployees');
        
        res.status(200).json(trainingPrograms);
    } catch (error) {
        console.error("Error fetching training programs:", error);
        res.status(500).json({ error: "An error occurred while fetching training programs" });
    }
});

// Get enrolled employees for a specific training program
server.get("/training-programs/:programId/enrolled-employees", async (req, res) => {
    try {
        const { programId } = req.params;
        const trainingProgram = await programs.findById(programId).populate('enrolledEmployees');
        if (!trainingProgram) {
            return res.status(404).json({ error: "Training program not found" });
        }
        const enrolledEmployees = trainingProgram.enrolledEmployees;
        res.status(200).json(enrolledEmployees);
    } catch (error) {
        console.error(`Error fetching enrolled employees for program ${programId}:`, error);
        res.status(500).json({ error: "An error occurred while fetching enrolled employees" });
    }
});

// Delete All Instance of a Program
server.delete("/training-programs/:name", async (req, res) => {
    try {
        const { name } = req.params;
        const deletedPrograms = await programs.deleteMany({ name });
        if (deletedPrograms.deletedCount === 0) {
            return res.status(404).json({ error: "Training programs not found" });
        }
        res.status(200).json(deletedPrograms);
    } catch (error) {
        console.error("Error deleting training programs:", error);
        res.status(500).json({ error: "An error occurred while deleting the training programs" });
    }
});

// Delete training program by ID
server.delete("/training-programs-id/:id", async (req, res) => {
    try {
        const { id } = req.params;
        console.log("Received object ID:", id);
        const deletedProgram = await programs.findByIdAndDelete(id);
        if (!deletedProgram) {
            return res.status(404).json({ error: `Training program with ID ${id} not found` });
        }
        res.status(200).json(deletedProgram);
    } catch (error) {
        console.error("Error deleting training program:", error);
        res.status(500).json({ error: "An error occurred while deleting the training program" });
    }
});
// End of Training

// End of Human Resources

// Start of Supplies
// Add
server.post('/products', async (req, res) => {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

server.post('/sales', async (req, res) => {
    try {
      const { product, quantitySold } = req.body;
  
      const productDetails = await Product.findById(product);
  
      if (!productDetails) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      const totalPrice = productDetails.price * quantitySold;
  
      const sale = new Sale({
        product,
        quantitySold,
        totalPrice
      });
  
      await sale.save();
  
      res.status(201).json({ message: 'Sale created successfully', sale });
    } catch (error) {
      console.error('Error creating sale:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
server.get('/categories', async (req, res) => {
    try {
        const categories = await Product.distinct('productCategory');
        res.json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

server.get('/brands', async (req, res) => {
    try {
        const brands = await Product.distinct('brandName');
        res.json(brands);
    } catch (error) {
        console.error('Error fetching brands:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET Products
server.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET Sales
server.get('/sales', async (req, res) => {
    try {
        const sales = await Sale.find().populate('product');
        res.json(sales);
    } catch (error) {
        console.error('Error fetching sales:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET Sales by Product ID
server.get('/sales/productID', async (req, res) => {
    try {
        const { product } = req.query;
        const sales = await Sale.find({ product }).populate('product');
        res.json(sales);
    } catch (error) {
        console.error('Error fetching sales:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET for Search
server.get('/search', async (req, res) => {
    const { query } = req.query;
    try {
        const products = await Product.find({
            productName: { $regex: query, $options: 'i' }
        });
        res.json(products);
    } catch (error) {
        console.error('Error searching products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
