const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const User = require('./models/user.model.js');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/dsapoint')

app.post('/api/register',async (req,res)=>{
    console.log(req.body);
    try{
        const user = await User.create({
            fullName: req.body.fullName,
            emailId: req.body.emailId,
            password:req.body.password,
            cpassword:req.body.cpassword
        });
        res.json({status : 'ok'})
    }catch(err){
        res.json({status : 'error', error: 'Duplicate email'})
    }
})

app.post('/api/login',async (req,res)=>{
    const user = await User.findOne({
        emailId: req.body.emailId, 
        password: req.body.password
    })

    if(user){
        return res.json({status : 'ok', user: true})
    }else{
        return res.json({status : 'error', user: false})
    }

    res.json({status : 'ok'})
    
})

app.listen(8000,()=>{
    console.log('Server started at port 8000');
})