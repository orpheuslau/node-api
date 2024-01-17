const express = require('express');
const router = express.Router();
const auth = require('../middleware/cookieJwtAuth')

const Assess = require('../models/assessModel')
const {getAssesss, getAssesssByID, putAssesssByID, delAssesssByID, createAssess} = require('../controllers/assessController')

router.get('', auth, getAssesss);
//router.get('', getAssesss);

//router.post('', getAssesssByID);
   
    //update a Student
router.put('/:id', putAssesssByID);
    
//delete Student
router.delete('/:id', delAssesssByID)

//create student
router.post('',createAssess);
    
module.exports = router