
var net 	   = require('net'),
_       	   = require('c-struct')

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
var client = net.connect ({port: 5555 }, function () {
 	console.log('cliente inicializado');
});

client.on ( 'end', function () { 
	console.log( 'conexao encerrada pelo servidor');
});

client.on ( 'error', function (err) {
	console.log( "server error: " + err);
});

client.on ( 'data', function (data) {
    console.log("Mensagem recebida: \n");
    console.log( data.toString ());
});

//Enviando Mensagem
var sendMessage = function(id_Device, nome_Device, device_Value){

	_.register('Data2', Datagrama2);

	var buf = _.packSync('Data2', {
   		id_rpc: ENVIA_INF,         
   		id_device: id_Device,
   		name_device:nome_Device,
   		device_value:device_Value   
	});
    
	var message      = new Buffer(buf,"hex");

	client.write ( message);
	client.end();
    console.log('Enviou mensagem');
}

//Umidade do ar
sendMessage(UMIDADE, "UMIDADE", Math.floor((Math.random() * 10) + 1))

//Inundacao
//sendMessage(INUNDACAO, "INUNDACAO", Math.floor((Math.random() * 2) + 1))
