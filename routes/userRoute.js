const express = require('express');
const router = express.Router();

const User = require('../models/userModel')
const {getUsers, getUsersByID, putUsersByID, delUsersByID, createUser} = require('../controllers/userController')

router.get('', getUsers);

router.get('/:id', getUsersByID);
   
    //update a user
router.put('/:id', putUsersByID);
    
//delete user
router.delete('/:id', delUsersByID)

router.post('', createUser);
    
module.exports = router