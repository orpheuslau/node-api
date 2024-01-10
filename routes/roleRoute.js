const express = require('express');
const router = express.Router();
//const auth = require('../middleware/cookieJwtAuth')

const User = require('../models/userModel')
const {getRoles} = require('../controllers/roleController')

router.get('', getRoles);


    
module.exports = router