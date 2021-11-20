const mongoose = require('mongoose');

const user = new mongoose.Schema({
    fullName : { type: String, required: true },
    emailId : { type: String, required: true, unique:true },
    password : { type: String, required: true },
    cpassword : { type: String, required: true }
},{
    collection: 'user-data'}
)

const User = mongoose.model('UserData',user)

module.exports = User