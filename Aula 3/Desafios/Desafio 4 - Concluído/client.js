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

var Datagrama1 = new _.Schema({
    id_rpc:_.type.uint32,
    id_device:_.type.uint32,
    name_device: _.type.string(20),
    device_value:_.type.uint32
});


var Datagrama2 = new _.Schema({
    id_rpc:_.type.uint32,
    message: _.type.string(30),
});

///// criando server 5555
var client = net.connect ({port: 5555 }, function () {
 	console.log('cliente inicializado');
});

client.on ( 'end', function () { 
	console.log('conexao encerrada pelo servidor');
});

client.on ( 'error', function (err) {
	console.log("server error: " + err);
});

client.on ( 'data', function (data) {

    _.register('Data1', Datagrama1);
    var obj   = _.unpackSync('Data1',  data);
    //Recebeu comando
    console.log("Mensagem recebida: \n");
    console.log("id_rpc: "       + obj.id_rpc);
    console.log("id_device: "    + obj.id_device);
    console.log("name_device: "  + obj.name_device);
    console.log("device_value: " + obj.device_value);

    //Preparando buffer para enviar
    _.register('Data2', Datagrama2);

    var buf = _.packSync('Data2', {
        id_rpc: RETONO_INF,         
        message:  "Mensagem Ok - id: " + obj.id_device
    });

    var message      = new Buffer(buf,"hex");

	client.write ( message);
    console.log('Enviou mensagem');
});