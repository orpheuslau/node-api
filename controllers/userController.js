const User = require('../models/userModel');
const asyncHandler = require('express-async-handler')


//get all user
const getUsers = asyncHandler(async(req,res)=> {
    try {
        const Users = await User.find({});
        res.status(200).json(Users);
    } catch (error) {
        throw new Error(error.message);
        //res.status(500).json({message: error.message})
        
    }
    })

//get user by ID
const getUsersByID = asyncHandler(async(req,res)=>{
    try {
        const {username, password} = req.body;
        const Users = await User.findOne({username,password})
        console.log(username)
        if(!Users){
        res.status(404)
            throw new Error(`cannot find this user with ID ${username}`);
        }
        res.status(200).json(Users);
    } catch (error) {
        throw new Error(error.message);
       // res.status(500).json({message: error.message})
    }
})

//update a user
const putUsersByID = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params;
        const Users = await User.findByIDAndUpdate(id,req.body);
        if(!Users){
            res.status(404);
            throw new Error(`cannot find this user with ID ${id}`);
        }
        const updateduser = await User.findByID(id);
        res.status(200).json(updateduser);
    } catch (error) {
        throw new Error(error.message);
        
    }
})

//delete a user
const delUsersByID = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params;
        const user = await User.findByIDAndDelete(id);
        if(!user){
            res.status(404);
            throw new Error(`cannot find this user with ID ${id}`);
        }
        
        res.status(200).json(user);
    } catch (error) {
                throw new Error(error.message);
        
    }
})

//create a new user
const createUser = asyncHandler(async(req,res)=>{
    try {
        const user = await User.create(req.body)
        res.status(200).json(user);
        } catch (error) {
            res.status(500);
            throw new Error(error.message);
    }
})

    module.exports = {
        getUsers,
        getUsersByID,
        putUsersByID,
        delUsersByID,
        createUser
    }