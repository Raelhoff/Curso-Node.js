var net        = require('net'),
_              = require('c-struct'),
dgram          = require('dgram'),
serverUDP      = dgram.createSocket('udp4'),
request        = require('request');


////Request///////////
var req = function(device){
 request.post('http://127.0.0.1:3000/device', {
      form:device
    })
    .on('response', function(response) {
        console.log(response.statusCode); // 200
    })
    .on('error', function(err) {
          console.log( err);
    })
}

/////////////////////
///Comandos trocados
var ENVIA_INF   = 1,
    RETONO_INF  = 2;

///Sensores disponíveis
var TEMPERATURA   = 1,
    UMIDADE       = 2,
    INUNDACAO     = 3,
    INFRAVERMELHO = 4;

var Datagrama1 = new _.Schema({
    id_rpc:_.type.uint32,
    message: _.type.string(30),
});

var Datagrama2 = new _.Schema({
    id_rpc:_.type.uint32,
    id_device:_.type.uint32,
    name_device: _.type.string(20),
    device_value:_.type.uint32
});

////////////////////////TCP/////////////////////////////////////////////////
///// criando server 5555
var server = net.createServer (function (connection) { 
    
    ///Estados da conexao
    connection.on ( 'connection', function () {
      console.log('cliente desconectado');
    });

    connection.on ( 'error', function () {
        console.log( "server error:\n" + err);
    });
   
    connection.on ( 'data', function (data) {
        _.register('Data2', Datagrama2);
        var obj   = _.unpackSync('Data2',  data);

        console.log("Mensagem recebida: \n");
        console.log("id_rpc: "       + obj.id_rpc);
        console.log("id_device: "    + obj.id_device);
        console.log("name_device: "  + obj.name_device);
        console.log("device_value: " + obj.device_value);
        req(obj);
    });

    connection.on ( 'end', function () {
      console.log ( 'cliente desconectado');
    });

   
});

server.listen (5555, function () { 
    console.log( "TCP server listening: 5555\n");
});

////////////////////////UDP/////////////////////////////////////////////////
serverUDP.on('error', function(err){
    console.log( "server error:\n" + err);
});

serverUDP.on('message', function(msg, rinfo){

    _.register('Data2', Datagrama2);
    var obj   = _.unpackSync('Data2',  msg);

    console.log("Mensagem recebida: \n");
    console.log( "id_rpc: "       + obj.id_rpc);
    console.log( "id_device: "    + obj.id_device);
    console.log( "name_device: "  + obj.name_device);
    console.log( "device_value: " + obj.device_value);
    console.log("IP: " + rinfo.address + " Port: " + rinfo.port);
    req(obj);
});

serverUDP.on('listening', function() {
  const address = serverUDP.address();
  console.log("UDP server listening: " + address.address + "  " + address.port);
});


serverUDP.bind({
    address: '127.0.0.1',
    port: 5555,
    exclusive: true
});

