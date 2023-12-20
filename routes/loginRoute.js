const express = require('express');
const router = express.Router();

const User = require('../models/userModel')
const {checkUser} = require('../controllers/loginController')


router.post('', checkUser);
    
module.exports = router