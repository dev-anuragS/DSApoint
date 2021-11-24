const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');

dotenv.config({path:"./config/config.env"});
/* ------------------------------- Middlewares ------------------------------ */

app.use(cors());
app.use(express.json());

/* ---------------------------- Importing Routers --------------------------- */
app.use('/api',require('./routers/auth'))

mongoose.connect('mongodb://localhost:27017/dsapoint')


app.listen(8000,()=>{
    console.log('Server started at port 8000');
})