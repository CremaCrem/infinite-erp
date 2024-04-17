const express = require("express")
const server = express();
const mongoose = require("mongoose")
server.use(express.json())
const cors = require('cors')

const mongoURL = "mongodb+srv://j3remyz1on:Pm12duvQmpReJgb6@cluster0.0sqyiib.mongodb.net/hr-sia-database"
const path = require('path');

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
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../public/files'));
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + '_' + file.originalname);
    }
});


const upload = multer({
    storage: storage,
    limits: {fileSize: maxSize}
})

//Check Connection
server.listen(5000, ()=>{
    console.log("Server Started")
})

//Schema Import
require("./models/recruitmentdetails")
const recruit = mongoose.model("RecruitInfo")

function getRelativePath(absolutePath) {
    // Calculate the relative path
    const rootDir = path.join(__dirname, '../public');
    const relativePath = path.relative(rootDir, absolutePath);
    return relativePath;
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
            pdf: getRelativePath(file[0].path), // Modify the path here
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


  //Update
  server.put('/recruit/:id', upload.fields([{ name: 'file' }, { name: 'picture' }]), async (req, res) => {
    try {
        const { id } = req.params;

        console.log("Received PUT request for recruit with ID:", id);

        console.log("Request body:", req.body);
        console.log("Request files:", req.files);

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

        console.log("Updated recruit:", updatedRecruit);

        if (!updatedRecruit) {
            console.log("Recruit not found");
            return res.status(404).json({ message: "Not Found" });
        }

        console.log("Recruit updated successfully");

        res.status(200).json(updatedRecruit);
    } catch (error) {
        console.error("Error updating recruit:", error);
        res.status(500).json({ message: error.message });
    }
})

// Delete
server.delete('/recruit/:id', async (req, res) => {
    try {
        const { id } = req.params;

        console.log("Received DELETE request for recruit with ID:", id);

        const deletedRecruit = await recruit.findByIdAndDelete(id);

        if (!deletedRecruit) {
            console.log("Recruit not found");
            return res.status(404).json({ message: "Not Found" });
        }

        console.log("Recruit deleted successfully");

        res.status(200).json({ message: "Recruit deleted successfully" });
    } catch (error) {
        console.error("Error deleting recruit:", error);
        res.status(500).json({ message: error.message });
    }
});

