const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true,
      },
    description: String,
    date: Date,
    status: {
        type: String,
        enum: ['Open', 'In Progress', 'Closed'],
        default: 'Open',
      },
    reporter: String
    },
    {
        collection:"Complaints",
    }     
)

mongoose.model("Complaints", complaintSchema)