const express = require('express');
const app = express();

const api = require('./Routes/userrouter');
const mongoose = require('mongoose');

app.use('/register', api);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/NGO')
console.log("you are now coonected to mongodb")

app.get('/',(req,res)=> {
    res.send('Default Route');
});

const port = process.env.PORT || 4000;
app.listen (port ,()=>console.log ('Listening in port' + port))