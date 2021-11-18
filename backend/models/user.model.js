const mongoose = require('mongoose');

const User = new mongoose.Schema({
    fullName : { type: String, required: true },
    emailId : { type: String, required: true, unique:true },
    password : { type: String, required: true },
    cpassword : { type: String, required: true }
},{
    collection: 'user-data'}
)

const model = mongoose.model('UserData',User)

module.exports = model