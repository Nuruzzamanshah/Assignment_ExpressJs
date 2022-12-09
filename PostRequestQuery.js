const express = require('express');

app=express();

app.post('/',function(req,res){

    var firstName = req.query.firstName;
    var lastName  = req.query.lastName;

    res.end(firstName+ " " + lastName);

})


app.listen(8000, function(){
    console.log(`Server Run Success`);
});

//http://localhost:8000?firstName=Nuruzzaman&lastName=shah