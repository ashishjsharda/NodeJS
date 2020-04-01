const express=require('express');
var app=express();
app.get('/',(req,res)=>{
    console.log('Sending Get message');
    res.send('Hello Get');
}).listen(8082);
console.log('Listening on port 8082');
