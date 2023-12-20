const User = require('../models/userModel');
const asyncHandler = require('express-async-handler')
const bcrypt = require("bcryptjs")





//create a new user
const checkUser = asyncHandler(async(req,res)=>{
    
    const { username, password } = req.body
    // Check if username and password is provided
    if (!username || !password) {
      return res.status(400).json({
        message: "Username or Password not present",
      })
    }
    try {
      const user = await User.findOne({ username })
      if (!user) {
        res.status(400).json({
          message: "Login not successful",
          error: "User not found",
        })
      } else {
        // comparing given password with hashed password
        bcrypt.compare(password, user.password).then(function (result) {
          result
            ? res.status(200).json({
                message: "Login successful",
                user,
              })
            : res.status(400).json({ message: "Login not succesful" })
        })
      }
    } catch (error) {
      res.status(400).json({
        message: "An error occurred",
        error: error.message,
      })
    }
  })
    {/*try {
        //const user = await User.create(req.body)
        const user = await User.findOne(req.body)
        res.status(200).json(user);
        } catch (error) {
            res.status(500);
            throw new Error(error.message);
    }*/}





    

    module.exports = {
        
        checkUser
    }