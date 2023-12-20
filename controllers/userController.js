const User = require('../models/userModel');
const asyncHandler = require('express-async-handler')
const bcrypt = require("bcryptjs")

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
        const {id} = req.params;
        const Users = await User.findById(id);
        if(!Users){
        res.status(404)
            throw new Error(`cannot find this user with ID ${id}`);
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
        const Users = await User.findByIdAndUpdate(id,req.body);
        if(!Users){
            res.status(404);
            throw new Error(`cannot find this user with ID ${id}`);
        }
        const updateduser = await User.findById(id);
        res.status(200).json(updateduser);
    } catch (error) {
        throw new Error(error.message);
        
    }
})

//delete a user
const delUsersByID = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
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
 

    const { username, password } = req.body
    bcrypt.hash(password, 10).then(async (hash) => {
        await User.create({
          username,
          password: hash,
        })
          .then((user) =>
            res.status(200).json({
              message: "User successfully created",
               user,
            })
          )
          .catch((error) =>
            res.status(400).json({
              message: "User not successful created",
              error: error.message,
            })
          );
      });
    })





    module.exports = {
        getUsers,
        getUsersByID,
        putUsersByID,
        delUsersByID,
        createUser
    }