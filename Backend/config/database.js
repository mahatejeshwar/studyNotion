const mongoose=require("mongoose");
require("dotenv").config();

exports.connect=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("Db connect sucessfully"))
    .catch((error)=>{
        console.log("db connection failed");
        console.error(error);
        process.exit(1);
    })
};