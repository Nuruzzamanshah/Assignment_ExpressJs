const express = require('express');

app=express();

app.get("/dow", function(req, res){
    res.download("./uploads/abc.html");
});

app.listen(8000, function(){
    console.log(`Server Run Success`);
})