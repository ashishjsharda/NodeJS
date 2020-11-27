const http=require('http')
http.createServer((req, res) =>{
    console.log(req);
    res.setHeader('Content-Type','text/html')
    res.write("Hello")
}).listen(8082);
console.log("Listener Started");
