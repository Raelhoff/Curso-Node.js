    var _              = require('c-struct'),
        dgram          = require('dgram'),
        server         = dgram.createSocket('udp4');

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


///// criando server 5555
server.on('error', function(err){
    console.log("server error:" + err);
});

server.on('message', function(msg, rinfo){
    _.register('Data1', Datagrama1);
    var obj   = _.unpackSync('Data1',  msg);
    console.log("Mensagem: " + obj.message + "IP: " + rinfo.address + " Port: " + rinfo.port);
});

server.on('listening', function() {
  const address = server.address();
  console.log("Server listening " + address.address + "  " + address.port);
});


server.bind({
    address: '127.0.0.1',
    port: 5555,
    exclusive: true
});

//Enviando Mensagem
_.register('Data2', Datagrama2);

var buf = _.packSync('Data2', {
    id_rpc: ENVIA_INF,         
    id_device: TEMPERATURA,
    name_device:"Temperatura",
    device_value:25   
});
    
var message      = new Buffer(buf,"hex");

server.send(message,  0, message.length, 5556, '127.0.0.1', function(err, bytes) {
  if (err){ 
      console.log("Error: " + err);
  }else{
      console.log('Enviou mensagem');
  };
});