const fs=require("fs")
fs.readFile("server.js",function(err,data){
    if(err){
        return console.error(err);
    }
    console.log(data.toString());
});
console.log("Program ended");
