import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    rollno: {
        type: Number,
        required: true,
        unique: true
    },
    mobile: {
        type: Number,
        required: true,
        unique: true
    },
    branch: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const Student = mongoose.model('student', studentSchema);
export default Student;



