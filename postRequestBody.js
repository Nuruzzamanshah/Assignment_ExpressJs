const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

//Post application-json
app.post('/',function(req,res){
   var  JsonData   = req.body;

   var name = JsonData["Name"];
   var city = JsonData["City"];
   res.send(name+ " " + city);

});

app.listen(8000,function(){
    console.log(`Server Is Run SuccessFully`);
})


