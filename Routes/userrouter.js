var express = require ('express');
var router = express .Router();
var bodyParser = require('body-parser');
var cors = require('cors');

router.use(cors())

const mongoose =require ('mongoose');
const User = require ('../Models/userschema');

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

router.use(function (req,res,next){
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.post('/', function(req, res) {
    console.log (JSON.stringify(req.body));
    User.create(req.body,function(err,userdata){
        if(err)
      
        console.log("somethig went wrong");
        res.json(userdata);
    })
  
})
router.get('/', function(req, res) {
    User.find(function(err,userdata){
        if(err)
        console.log("somethig went wrong");
        res.json(userdata);
    })

    //res.send("ok");     
       
    })
    router.get('/:id', function(req, res) {
        var Id = req.params.id;
        User.findById(Id ,function(err,userdata){
            if(err)
            console.log(" somethig went wrong");
            res.json(userdata);
        })
    
        //res.send("ok");     
           
        })
    // router.get('/:Last_Name', function(req, res) {
    //     var lastname = req.params.Last_Name;
    //     // console.log(lastname);
      // User.findOne({Last_Name:'lastname'},function(err,userdata){
    //         if(err)
    //         console.log(" somethig went wrong");
    //         console.log(userdata)
    //         res.json(userdata);
    //     })
    
    //     //res.send("ok");     
           
    //     })
        
    
    module.exports = router;