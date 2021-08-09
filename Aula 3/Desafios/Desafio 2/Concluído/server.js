var express = require('express'); //retorno da funcao
var app = express(); // executando a funcao
var xmlfile = require('./readfile')


var xml = xmlfile('./file.xml');
//console.log(xml)
//console.log(xml.childNamed("porta").toString());

//xml.childNamed("contatos").eachChild(function(child, index, array){
	//console.log(array);
//	console.log(child.childNamed("nome").toString());
//	console.log(child.childNamed("telefone").toString());
//})

app.get('/contatos', function(req, res) {
	console.log(xml.childNamed("contatos").toString())
	res.send(xml.childNamed("contatos").toString())
})


app.get('/', function(req, res) {
	res.send("<html><body>Bem vindo</body></html>")
})

app.listen(xml.valueWithPath("porta"), function(req, res){
	console.log("Servidor rodando com Express");
});
