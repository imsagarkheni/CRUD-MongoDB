const express = require("express");

const app = express();
const port = process.env.PORT || 2222;
require("../db/connection")


app.use(express.json());
app.use(express.urlencoded({extended:false}))

const Model = require("../models/schema")


const doctorRoute = require("../routes/routes");
app.use("/doctor",doctorRoute)



app.listen(port,()=>{
    console.log(`Server Created Successfully on port ${port}`);
})