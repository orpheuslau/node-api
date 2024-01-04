const Assess = require('../models/assessModel');
const asyncHandler = require('express-async-handler')
const auth = require('../middleware/cookieJwtAuth')


const { cookieJwtAuth } = require("../middleware/cookieJwtAuth");


//get all Assesss
const getAssesss = asyncHandler(async (req, res) => {
    try {
        
        const Assesss = await Assess.find({});
        res.status(200).json(Assesss);

    } catch (error) {
        throw new Error(error.message);
        //res.status(500).json({message: error.message})
        

    }
})

//get Assesss by ID
const getAssesssByID = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const Assesss = await Assess.findById(id);
        if (!Assesss) {
            res.status(404)
            throw new Error(`cannot find this Assesss with ID ${id}`);
        }
        res.status(200).json(Assesss);
    } catch (error) {
        throw new Error(error.message);
        // res.status(500).json({message: error.message})
    }
})

//update a Assesss
const putAssesssByID = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const Assesss = await Assess.findByIdAndUpdate(id, req.body);
        if (!Assesss) {
            res.status(404);
            throw new Error(`cannot find this Assesss with ID ${id}`);
        }
        const updatedAssess = await Assess.findById(id);
        res.status(200).json(updatedAssess);
    } catch (error) {
        throw new Error(error.message);

    }
})

//delete a Assesss
const delAssesssByID = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const Assesss = await Assess.findByIdAndDelete(id);
        if (!Assesss) {
            res.status(404);
            throw new Error(`cannot find this Assesss with ID ${id}`);
        }

        res.status(200).json(Assesss);
    } catch (error) {
        throw new Error(error.message);

    }
})

//create a new Assesss
const createAssess = asyncHandler(async (req, res) => {
    try {
        const Assesss = await Assess.create(req.body)
        res.status(200).json(Assesss);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = {
    getAssesss,
    getAssesssByID,
    putAssesssByID,
    delAssesssByID,
    createAssess,

}

