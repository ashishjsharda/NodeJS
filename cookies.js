/**
 * Using Cookies
 * @author asharda
 */
const express=require('express')
const cookieParser=require('cookie-parser')
var app=express();
app.use(cookieParser());
app.get('/cookie',function(req,res){
    res.cookie('cookie_name','cookie_val').send("Cookies are set");
});
app.get('/',(req,res)=>{
    res.send("Cookies are set");
    console.log("Cookies set are",req.cookies);
    
}).listen(3200);


console.log("Listening")
