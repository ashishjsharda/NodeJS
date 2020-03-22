const http=require('http')
http.createServer(function(req,res){
    res.writeHead("200",{'Content-Type':'text/html'});
    res.end("Hi, This is my example after long time");
}).listen(8082);
console.log("Wait,I am listening");
