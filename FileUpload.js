const express = require('express');
var multer = require('multer');

var app=express();

var storage = multer.diskStorage({
    destination: function(req,file, callBack){
        callBack(null, './uploads')
    },
    filename:  function(req,file,callback){
        callback(null, file.originalname)
    }
});

var uploads = multer({storage:storage}).single('myfile');


app.post('/',function(req,res){
    uploads(req,res,function(error){
        if(error){
            res.send(`File Upload Fail`);
        }
        else{
            res.send(`File Upload Success`);
        }
    })
}); 

app.listen(8000,function(){
    console.log(`Server Is Run SuccessFully`);
})


