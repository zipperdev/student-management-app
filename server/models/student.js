import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    regNo: {
        type: Number, 
        required: true
    }, 
    studentName: {
        type: String, 
        required: true
    }, 
    grade: {
        type: String, 
        required: true
    }, 
    section: {
        type: String, 
        default: "A"
    }
});

const student = mongoose.model("student", studentSchema);

export default student;