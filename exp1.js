const express=require('express')
const app=express();
app.get('/', (req,res) =>{
    res.send("Hello Express")
}).listen(3000, () =>console.log("Started Server on port 3000"));
