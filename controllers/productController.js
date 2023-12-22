const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler')


const { cookieJwtAuth } = require("../middleware/cookieJwtAuth");


//get all product
const getProducts = asyncHandler(async(req,res)=> {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        throw new Error(error.message);
        //res.status(500).json({message: error.message})
        
    }
    })

//get product by ID
const getProductsByID = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        if(!product){
        res.status(404)
            throw new Error(`cannot find this product with ID ${id}`);
        }
        res.status(200).json(product);
    } catch (error) {
        throw new Error(error.message);
       // res.status(500).json({message: error.message})
    }
})

//update a product
const putProductsByID = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            res.status(404);
            throw new Error(`cannot find this product with ID ${id}`);
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        throw new Error(error.message);
        
    }
})

//delete a product
const delProductsByID = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            res.status(404);
            throw new Error(`cannot find this product with ID ${id}`);
        }
        
        res.status(200).json(product);
    } catch (error) {
                throw new Error(error.message);
        
    }
})

//create a new product
const createProduct = asyncHandler(async(req,res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
        } catch (error) {
            res.status(500);
            throw new Error(error.message);
    }
})

    module.exports = {
        getProducts,
        getProductsByID,
        putProductsByID,
        delProductsByID,
        createProduct
    }

    module.exports = (app) =>
  app.post("/add", cookieJwtAuth, (req, res) => {
    console.log(req.user);
    res.redirect("/home");
  });
