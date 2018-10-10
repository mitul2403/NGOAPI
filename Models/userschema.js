const mongoose = require('mongoose');

 const userschema= new mongoose.Schema({    
    "First_Name ": String,
    "Last_Name": String,
    "Email":String,
    "password": String,
    "Role": String
     

 })
 module.exports = mongoose.model('userdetail',userschema)