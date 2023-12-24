const User = require('../models/userModel');
const asyncHandler = require('express-async-handler')
const bcrypt = require("bcryptjs")

//
//const jwt = require('jsonwebtoken');
//const secretKey = 'mySecretKey'; 



//check username and password
exports.checkUser = asyncHandler(async(req,res)=>{
  
    const { username, password } = req.body
  
    // Check if username and password is provided
    if (!username || !password) {
      return res.status(400).json({
        message: "Username or Password not present",
      })
    }
    try {
      
      const user = await User.findOne({ username })
      const result = false
      if (!user) {
        res.status(400).json({
          message: "Login not successful",
          error: "User not found",
        })
      } else {
        // comparing given password with hashed password
        bcrypt.compare(password, user.password).then(function (result) {
          if (result)
            {
              
             /* res.status(200).json({
                message: "Login successful",
                user,
              })*/
             
             /* const rrr = "fsafds"
              const jwt = require('jsonwebtoken');
              const secretKey = 'mySecretKey'; 
              console.log(rrr)
              const token = jwt.sign({ 
                id: user.id,
                username: user.username,
                role: user.role
              }, secretKey);
              res.json({
                token: token
              })*/

              const jwt = require('jsonwebtoken');
              jwt.sign({user}, 'privatekey', { expiresIn: '1h' },(err, token) => {
                if(err) { console.log(err) }    
               res.status(200).json({message: "Login success", token: token})
               localStorage.setItem("token", response.data.token);
               // console.log(user.username)
            });

            } 
          else res.status(400).json({ message: "Login not succesful" })
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





    

   