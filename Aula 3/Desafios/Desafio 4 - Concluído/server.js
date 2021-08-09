var net 	   = require('net'),
_       	   = require('c-struct');

///Comandos trocados
var ENVIA_INF   = 1,
    RETONO_INF  = 2;

///Sensores disponíveis
var TEMPERATURA   = 1,
    UMIDADE       = 2,
    INUNDACAO     = 3,
    INFRAVERMELHO = 4;

var Datagrama2 = new _.Schema({
    id_rpc:_.type.uint32,
    message: _.type.string(30),
});

var Datagrama1 = new _.Schema({
    id_rpc:_.type.uint32,
    id_device:_.type.uint32,
    name_device: _.type.string(20),
    device_value:_.type.uint32
});


///// criando server 5555
var server = net.createServer (function (connection) { 
	
	///Estados da conexao
    connection.on ( 'connection', function () {
      console.log('cliente desconectado');
    });

    connection.on ( 'error', function () {
	    console.log("server error:\n" + err);
    });
   
    connection.on ( 'data', function (msg) {
    	_.register('Data2', Datagrama2);
    	var obj   = _.unpackSync('Data2',  msg);
    	console.log(obj);
    	console.log("Mensagem: " + obj.message);
	});

    connection.on ( 'end', function () {
      console.log ( 'cliente desconectado');
    });

	//Enviando Mensagem
	_.register('Data1', Datagrama1);

	var buf = _.packSync('Data1', {
    	id_rpc: ENVIA_INF,         
    	id_device: TEMPERATURA,
    	name_device:"Temperatura",
    	device_value:25   
	});
    
	var message      = new Buffer(buf,"hex");

    connection.write ( message);
   
});

server.listen (5555, function () { 
    console.log("server listen - port: 5555\n");
});
