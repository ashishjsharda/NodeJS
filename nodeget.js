const express=require('express')
const app=express();
app.get("/",(req,res)=> {
    console.log("In the get method");
    res.send("From the get method");
}).listen(8082,() =>{
    console.log("server started on port 8082");
});
