const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/getEmployees",async(req,res)=>{

    let employeesData = await Employee.find();
    //.distinct("country");
    //.distinct("department");
    //.sort("country department");
    //.select("-email");
    //.or();
    //.countdocument();
    //.and([{country:"Russia"},{gender:"Male"},{age:{$gte:18, $lte:40}}]);
    res.json(employeesData);
})

app.listen(4567,()=>{
    console.log("Listening to port 4567");
});

let employeeSchema = new mongoose.Schema({
    id:Number,
    firstName:String,
    lastName:String,
    email:String,
    gender:String,
    age:Number,
    country:String,
    department:String,
    profilePic:String,
});

let Employee = new mongoose.model("employee", employeeSchema);

// let getEmployeesFromDB = async ()=>{

//     let employeesData = await Employee.find();
//     console.log(employeesData);
// }

let connectToMDB = async ()=>{

    try{
        mongoose.connect("mongodb+srv://prudhvireddy:prudhvireddy@prudhvib.jwu4g.mongodb.net/Tata?retryWrites=true&w=majority&appName=PrudhviB");
        console.log("Successfully connected to MDB");
        //getEmployeesFromDB();
    }catch(err){
        console.log(err);
        console.log("Unable to connect to MDB");
    }
    };

    connectToMDB();
