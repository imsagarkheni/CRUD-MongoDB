const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/doctor")
.then(()=>{
    console.log("MongoDB connected");
})
.catch(()=>{
    console.log("connection failed of MongoDB");
});