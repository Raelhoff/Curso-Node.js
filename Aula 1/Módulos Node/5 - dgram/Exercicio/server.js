var PORT = 33333;
var HOST = '127.0.0.1';

var dgram   = require('dgram');
var server  = dgram.createSocket('udp4');
var retorno = require("./retornoserve");
var arrayClient = [];


function retornaNickname(host, port){
  var name = "";
  for(var i =0; i < arrayClient.length; i++){
      if(arrayClient[i].host === host && arrayClient[i].port === port)
          name = arrayClient[i].nickname;
  }
  return name;
}



server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    //console.log(remote.address + ':' + remote.port +' - ' + message);
    var command = message.toString();
    
    if (command.indexOf('nickname') === 0) {
      var nickname = command.replace('nickname', '');
  	  arrayClient.push({"host":remote.address, "port":remote.port, "nickname":nickname, "try": 8});
      retorno(remote.address, remote.port, "Bem vindo " + nickname);
      return;
    }else{
    //if (command.search('@') === 0)  {
      //console.log("Recebeu @")
      //var posicao = retornaPosicao(remote.address, remote.port);
      //console.log('posicao -> '+ posicao)
     // if(posicao !== -1){
       // arrayClient[posicao].try = 8;
     // }  
     // console.log("Recebeu keepalive ip: " + remote.address + " port: " + remote.port)
    //  return;
    //}else{
        var name = retornaNickname(remote.address, remote.port);
        console.log(name+ "->" + message);
        arrayClient.forEach(function(obs){
          if(obs.nickname !== name){
            retorno(obs.host, obs.port, name + " -> " + message);
          }
        })

    }
});

process.stdin.on('readable', function () {
	var message = process.stdin.read();
	if (!message) return;
	message = message.toString().replace(/\n/, '');
	arrayClient.forEach(function(obs){
    retorno(obs.host, obs.port, obs.nickname +" -> " + message);
  })
   
	});


server.bind(PORT, HOST);