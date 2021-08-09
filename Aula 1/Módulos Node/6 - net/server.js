var net = require ( 'net');


var server = net.createServer (function (connection) { 
   console.log ( 'cliente conectado');

   connection.on ( 'end', function () {
      console.log ( 'cliente desconectado');
   });
   
   connection.write ( 'Ola Mundo');
   
});

server.listen (5555, function () { 
  console.log ( 'servidor esta escutando');
});