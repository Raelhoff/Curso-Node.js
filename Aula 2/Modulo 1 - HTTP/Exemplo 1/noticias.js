var http = require('http');

var server = http.createServer(function(request, response){
	var categoria = request.url;

	if(categoria == '/tecnologia'){
		response.end("<html><body>Noticias de tecnologia!</body></html>");	
	}else
	if(categoria == '/moda'){
		response.end("<html><body>Noticias de Moda!</body></html>");	
	}else
	if(categoria == '/beleza'){
		response.end("<html><body>Noticias de Beleza!</body></html>");	
	}else{
		response.end("<html><body>Portal de noticias!</body></html>");
	}
});
server.listen(3000, function(){
console.log('Servidor Hello World rodando!');
});