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

//Recruitment 
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

// Fetch recruitment data endpoint
server.get("/recruit", async (req, res) => {
    try {
      const recruitmentData = await recruit.find(); // Fetch all recruitment data from the database
      res.json(recruitmentData);
    } catch (error) {
      console.error("Error fetching recruitment data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  