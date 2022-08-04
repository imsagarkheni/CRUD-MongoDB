const mongoose = require("mongoose");

const docSchema= mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        required:true
    },
    hospitalName:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }
});

const docData = new mongoose.model("docData", docSchema);
module.exports=docData;