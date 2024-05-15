const mongoose = require("mongoose")
const { unique } = require("next/dist/build/utils")

const employeeDetailsSchema = new mongoose.Schema({
    employeeID: {
        type: String,
        unique: true
    },
    employeeFullName: String,
    employeeGender: String,
    employeeDateofBirth: Date,
    employeeAddress: String,
    employeeProfession: String,
    employeeContactInfo: String,
    employeeEmail: String,
    employeeSocialLink1: String,
    employeeSocialLink2: String,
    employeeSocialLink3: String,
    employeeTeam: String,
    employeeAbsences: {
        type: Number,
        default: 0
    },
    employeePresents: {
        type: Number,
        default: 0
    },
    dateStarted: Date,
    employeeSalary: Number,
    employeeImage: String
    },
    {
        collection:"EmployeeInfo",
    }
)

mongoose.model("EmployeeInfo", employeeDetailsSchema)