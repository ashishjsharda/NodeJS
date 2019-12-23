
/**
 * Send JSON Response
 * */
var http=require('http');
http.createServer(function(req,res){
   if(req.url=='/data')
   {
   res.writeHead(200,{'Content-Type':'application/json'});
   res.write(JSON.stringify({message:'Hello World'}));
   //res.write(req.url);
   res.end();
   }
   
}).listen(8092);
