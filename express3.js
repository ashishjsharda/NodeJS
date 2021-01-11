const express=require('express')
const app=express();
app.get('/', (req,res) =>{
    res.send("Hello Express")
})
app.get('/help', (req,res)=>{
    console.log("In Help Page");
    res.send("In Help");
})
app.listen(3000, () =>console.log("Started Server on port 3000"));
