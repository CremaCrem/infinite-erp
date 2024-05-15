const mongoose = require("mongoose");

const trainingProgramSchema = new mongoose.Schema({
    name: String,
    description: String,
    enrolledEmployees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'EmployeeInfo' }]
},
{
    collection: "TrainingProgram",
});

module.exports = mongoose.model("TrainingProgram", trainingProgramSchema);