const mongoose = require("mongoose")

const recruitmentDetailsSchema = new mongoose.Schema({
    recruitFullName: String,
    desiredProfession: String,
    recruitmentStatus: String,
    recruitContactInfo: String,
    recruitPicture: String,
    pdf: String,
    recruitImage: String
    },
    {
        collection:"RecruitInfo",
    }
)

mongoose.model("RecruitInfo", recruitmentDetailsSchema)