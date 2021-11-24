const express = require('express');
// const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const connectDB=require('./config/db.js');

dotenv.config({path:"./config/config.env"});
connectDB();
/* ------------------------------- Middlewares ------------------------------ */

app.use(cors());
app.use(express.json());

/* ---------------------------- Importing Routers --------------------------- */
app.use('/api',require('./routers/auth'))

app.listen(8000,()=>{
    console.log('Server started at port 8000');
})