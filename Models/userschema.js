const mongoose = require('mongoose');

 const userschema= new mongoose.Schema({    
    "First_Name ": String,
    "Last_Name": String,
    "Email":String,
    "password": String,
    "Role": String
     

 })
 module.exports = mongoose.model('userdetail',userschema)

 const eventSchema=new mongoose.Schema({
     "Event_name":string,
     "Event_Description":string,
     "Event_Category":string,
     "Event_StartDate":Date,
     "Event_EndDate":Date,
     "Event_EndTime":string,
     "Event_Location":string,
     
 })