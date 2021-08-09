var express = require('express'); //retorno da funcao
var app = express(); // executando a funcao


app.get('/', function(req,res){
	res.send("<html><body>Portal de noticias</body></html>")
});

app.get('/tecnologia', function(req,res){
	res.send("<html><body>Noticas de tecnologia</body></html>")
});

app.listen(3000, function(req, res){
	console.log("Servidor rodando com Express");
});