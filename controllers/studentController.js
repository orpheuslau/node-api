const student = require('../models/studentModel');
const asyncHandler = require('express-async-handler')
const auth = require('../middleware/cookieJwtAuth')


const { cookieJwtAuth } = require("../middleware/cookieJwtAuth");


//get all student
const getStudents = asyncHandler(async (req, res) => {
    try {
        
        const students = await student.find({});
        res.status(200).json(students);

    } catch (error) {
        throw new Error(error.message);
        //res.status(500).json({message: error.message})
        

    }
})

//get student by ID
const getStudentsByID = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const student = await student.findById(id);
        if (!student) {
            res.status(404)
            throw new Error(`cannot find this student with ID ${id}`);
        }
        res.status(200).json(student);
    } catch (error) {
        throw new Error(error.message);
        // res.status(500).json({message: error.message})
    }
})

//update a student
const putStudentsByID = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const student = await student.findByIdAndUpdate(id, req.body);
        if (!student) {
            res.status(404);
            throw new Error(`cannot find this student with ID ${id}`);
        }
        const updatedStudent = await student.findById(id);
        res.status(200).json(updatedStudent);
    } catch (error) {
        throw new Error(error.message);

    }
})

//delete a student
const delStudentsByID = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const student = await student.findByIdAndDelete(id);
        if (!student) {
            res.status(404);
            throw new Error(`cannot find this student with ID ${id}`);
        }

        res.status(200).json(student);
    } catch (error) {
        throw new Error(error.message);

    }
})

//create a new student
const createStudent = asyncHandler(async (req, res) => {
    try {
        const student = await student.create(req.body)
        res.status(200).json(student);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = {
    getStudents,
    getStudentsByID,
    putStudentsByID,
    delStudentsByID,
    createStudent,

}

