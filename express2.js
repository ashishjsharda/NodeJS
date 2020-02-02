/**
 * Example usinhg Express Js
 */
const express=require('express');
const app=express();
app.get('/',(req,res) =>{
    res.send("<h1>Hello World ...</h1>");
});
app.get('/array',(req,res) =>{
    res.send("<h1>[1,2,3]");
});
app.listen(3000,()=>console.log("Listening"));
