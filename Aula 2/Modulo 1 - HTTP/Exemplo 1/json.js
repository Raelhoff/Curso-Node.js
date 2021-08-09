var http = require('http');

var contatos = [
  {id: 1, nome: "Bruno", telefone: "9999-2222", data: new Date()},
  {id: 2, nome: "Sandra", telefone: "9999-3333", data: new Date()},
  {id: 3, nome: "Mariana", telefone: "9999-9999", data: new Date()}
];

var server = http.createServer(function(request, response){
	response.end(JSON.stringify(contatos));	
});

server.listen(3000, function(){
	console.log('Servidor Hello World rodando!');
});