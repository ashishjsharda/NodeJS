var http=require('http')
const server=http.createServer((req,res) =>{
   if(req.url==='/')
   {
      res.write("I am in root");
      res.end();
   }
   if(req.url==='/getString')
   {
      var obj = { name: "John", age: 30, city: "New York" };
      res.write(JSON.stringify(obj));
      res.end();

   }
}).listen(8081);
console.log("End of application")
