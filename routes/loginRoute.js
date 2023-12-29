const express = require('express');
const router = express.Router();

const User = require('../models/userModel')
const {checkUser, logout} = require('../controllers/loginController')


router.post('', checkUser);
router.get('', logout);
    
module.exports = router