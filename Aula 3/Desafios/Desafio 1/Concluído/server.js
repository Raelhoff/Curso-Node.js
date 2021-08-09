var express = require('express'); //retorno da funcao
var app = express(); // executando a funcao
var jsonfile = require('./readfile')


var json = jsonfile('./file.json');


app.get('/',function(req, res) {
	res.send("<html><body>Bem vindo</body></html>")
})


app.get('/contatos',function(req, res) {
	res.send(json.contatos);
})


app.listen(json.porta, function(req, res){
	console.log("Servidor rodando com Express");
});

