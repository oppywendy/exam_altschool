 const mongoose = require('mongoose');
 require("dotenv").config();
 //unction to connect

 const dbconnect = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('DB connected successfully')
        }
        catch(error){
            console.log(error);
        }     
    };

   
    module.exports = {dbconnect};