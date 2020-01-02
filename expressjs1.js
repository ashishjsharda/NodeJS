const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("Hello World");
}).listen(3200);
console.log("Listening on port 3200");
