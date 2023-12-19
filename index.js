require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');
//const Product = require('./models/productModel')

const producRoute = require('./routes/productRoute');
const userRoute = require('./routes/userRoute');

const errorMiddleware = require('./middleware/errorMiddleware');
//define express
const app = express();
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT //3000
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//define public folder
app.use(express.static("public"))

const frontend = process.env.FRONTEND;
var corsOptions = {
    origin: frontend,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

var cors = require("cors");
app.use(cors(corsOptions));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const fileUpload = require("express-fileupload");
app.use(fileUpload());


app.use('/api/products', producRoute);

app.use('/api/users', userRoute);


app.get('/', (req,res)=>{
    res.send('Hello NODE API')
})

app.use(errorMiddleware);



mongoose.set("strictQuery", false)
mongoose.
connect(MONGO_URL)
.then(()=>{
    console.log('connected to mongo')

    app.listen (PORT, ()=> {
        console.log('the server is runing at port', PORT)
    });
    
})
    .catch((error)=>{
        console.log(error)
})


//paste from server.js
{/*
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
  });
   
  
  const User = mongoose.model('User', userSchema);
  
  
  app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });*/}
  