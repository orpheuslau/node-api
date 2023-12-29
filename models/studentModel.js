const mongoose = require('mongoose')

const studentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter student's name"]
        },
        classid: {
            type: String,
            required: true,
        },
        contact: {
            type: Number,
            required: false,
        },
        address: {
            type: String,
            required: false,
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;