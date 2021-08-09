var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var message = new Buffer('Bem vindo!');
var client = dgram.createSocket('udp4');
var teclado = require('./teclado');

var options = process.argv.slice(2);
if (options.length < 1) {
    console.log("Digine seu nickname - exit\n")
    process.exit();
}

client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
   // client.close();
});

client.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);
});


teclado.aoDigitar(function (linha) {
    if (!linha) return;
    linha = linha.toString().replace(/\n/, '');
    client.send(linha, 0, linha.length, PORT, HOST, function(err, bytes) {
        if (err) throw err;
        console.log('UDP message sent to ' + HOST +':'+ PORT);
    //client.close();
    });


});