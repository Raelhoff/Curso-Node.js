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

var Datagrama2 = new _.Schema({
    id_rpc:_.type.uint32,
    id_device:_.type.uint32,
    name_device: _.type.string(20),
    device_value:_.type.uint32
});

//Enviando Mensagem

var sendMessage = function(host, port, id_Device, nome_Device, device_Value){
    _.register('Data2', Datagrama2);

    var buf = _.packSync('Data2', {
        id_rpc: ENVIA_INF,         
        id_device: id_Device,
        name_device: nome_Device,
        device_value: device_Value   
    });
    
    var message      = new Buffer(buf,"hex");

    server.send(message,  0, message.length, port, host, function(err, bytes) {
        if (err){ 
            console.log( 'Error: ' + err);
        }else{
            console.log('Enviou mensagem');
        };
        server.close();
    });


}

//Temperatura
 sendMessage("127.0.0.1", 5555, TEMPERATURA, "TEMPERATURA", Math.floor((Math.random() * 40) + 1));

//Infravermelho
 // sendMessage("127.0.0.1", 5555, INFRAVERMELHO, "INFRAVERMELHO", Math.floor((Math.random() * 10) + 1));

