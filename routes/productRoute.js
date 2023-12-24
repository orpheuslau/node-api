const express = require('express');
const router = express.Router();
const auth = require('../middleware/cookieJwtAuth')

const Product = require('../models/productModel')
const {getProducts, getProductsByID, putProductsByID, delProductsByID, createProduct} = require('../controllers/productController')

router.get('', auth, getProducts);

router.get('/:id', getProductsByID);
   
    //update a product
router.put('/:id', putProductsByID);
    
//delete product
router.delete('/:id', delProductsByID)

router.post('',createProduct);
    
module.exports = router