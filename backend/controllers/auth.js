const User = require("../models/user.model");
const jwt =require('jsonwebtoken')

exports.register= async (req,res)=>{
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
}

exports.login = async (req,res) => {
    const user = await User.findOne({
        emailId: req.body.emailId, 
        password: req.body.password
    })

    if(user){

        const token = jwt.sign({
            fullName : user.fullName,
            emailId : user.emailId,
        }, process.env.jwtToken);

        return res.json({status : 'ok', user: token})
    }else{
        return res.json({status : 'error', user: false})
    }
}

exports.profile= async (req,res)=>{
    const token = req.headers['x-access-token'];

    try{
        const decoded = jwt.verify(token, process.env.jwtToken);
        const emailId = decoded.emailId;
        const user = await User.findOne({emailId:emailId});
        return res.json( {status : 'ok', user : user});
    }
    catch(error){
        console.log(error);
        return res.json({status: 'error', error: 'invalid token'});
    }
}