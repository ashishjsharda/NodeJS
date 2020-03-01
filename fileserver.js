const express=require('express')
const app=express()
var fs=require("fs")
app.get('/listUsers',function(req,res){
    fs.readFile(__dirname+"/"+"user.json",'utf8',function(err,data){
        console.log(data);
        res.end(data);
    });
}).listen(3000,() =>{console.log("Listening on port 3000")});
