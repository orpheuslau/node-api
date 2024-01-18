const User = require('../models/userModel');
const asyncHandler = require('express-async-handler')
const bcrypt = require("bcryptjs")


const logout = asyncHandler(async (req, res) => {
  try {
    //const Users = await User.find({});
    res.cookie("jwt", "", { httpOnly: true, maxAge: "1", secure: true, sameSite: 'none' });
    //res.clearCookie("jwt");
    res.status(200).json({ message: "Logout ok" });
  }
  catch (err) {
    console.log(err)
    res.status(404).json({ message: "Logout NOT ok" })
  }
})

//check username and password
const checkUser = asyncHandler(async (req, res) => {

  const { username, password } = req.body

  // Check if username and password is provided
  if (!username || !password) {
    return res.status(400).json({
      message: "Username or Password not present",
    })
  }
  try {
    const user = await User.findOne({ username: username });
    //const result = false
    if (!user) {
      res.status(400).json({
        message: "Login not successful",
        error: "User not found"
      })
      throw new Error("User not found");
    } else {
      // comparing given password with hashed password
      bcrypt.compare(password, user.password).then(function (result) {
        if (result) {
          const jwt = require('jsonwebtoken');
          jwt.sign({ username: username, role: user.role }, process.env.jwtS, { expiresIn: '1h' }, (err, token) => {
            res.cookie("jwt", token, { httpOnly: true, maxAge: 1000 * 60 * 60, secure: true, sameSite: 'none' });
            // localStorage.setItem('token', token);
            res.status(200).json({ message: "Login success", name: user.name, role: user.role });
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
    throw new Error(error.message);
  }
})

module.exports = { checkUser, logout }





