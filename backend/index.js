const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');


/* ------------------------------- Middlewares ------------------------------ */

app.use(cors());
app.use(express.json());

/* ---------------------------- Importing Routers --------------------------- */
app.use('/api',require('./routers/auth'))

mongoose.connect('mongodb://localhost:27017/dsapoint')


app.listen(8000,()=>{
    console.log('Server started at port 8000');
})