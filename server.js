var net = require('net');
var server = net.createServer(function(connection) { 
   console.log('Client is now connected');
   
   connection.on('end', function() {
      console.log('client is now disconnected');
   });
   
   connection.write('Hello Client!\r\n');
   connection.pipe(connection);
});

server.listen(8080, function() { 
   console.log('server is listening');
});
