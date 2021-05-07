import Student from "../models/student.js";

export const getStudents = async (req, res) => {
    try {
        const allStudents = await Student.find();
        return res.status(200).json(allStudents);
    } catch (error) {
        return res.status(404).json({ success: false, message: error.message });
    };
};

export const createStudent = async (req, res) => {
    const student = req.body;
    try {
        const newStudent = await Student.create(student);
        return res.status(201).json(newStudent);
    } catch (error) {
        return res.status(409).json({ success: false, message: error.message });
    };
};

export const deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
        await Student.findByIdAndDelete(id).exec();
        return res.status(201).json({ success: true, message: `Successfully delete student: {_id: ${id}...} data.` });
    } catch (error) {
        return res.status(409).json({ success: false, message: error.message });
    }
};