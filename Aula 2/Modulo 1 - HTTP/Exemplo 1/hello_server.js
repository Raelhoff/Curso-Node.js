var http = require('http');

var server = http.createServer(function(request, response){
	response.end("<html><body>Hello World!</body></html>");
});

server.listen(3000, function(){
	console.log('Servidor Hello World rodando!');
});