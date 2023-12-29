const express = require('express');
const router = express.Router();
const auth = require('../middleware/cookieJwtAuth')

const Student = require('../models/studentModel')
const {getStudents, getStudentsByID, putStudentsByID, delStudentsByID, createStudent} = require('../controllers/studentController')

router.get('', auth, getStudents);

router.get('/:id', getStudentsByID);
   
    //update a Student
router.put('/:id', putStudentsByID);
    
//delete Student
router.delete('/:id', delStudentsByID)

router.post('',createStudent);
    
module.exports = router