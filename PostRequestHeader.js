const express = require('express');

app=express();

app.post('/',function(req,res){

    var userName   = req.header('userName');
    var passswors  = req.header('passswors');

    res.send("User Name:"+ userName + "Passswors: " + passswors);
});


app.listen(8000, function(){
    console.log(`Server Run Success`);
});