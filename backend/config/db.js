const mongoose = require('mongoose');

connectDB = async ()=>{
    try{
        const connection = await mongoose.connect(process.env.Mongo_URI,{
            useNewUrlParser : true,
            useunifiedTopology : true
        });

        console.log("MongoDB Connected");

    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;

