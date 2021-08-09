var express = require('express'); //retorno da funcao
var app = express(); // executando a funcao

var contatos = [
  {id: 1, nome: "Bruno", telefone: "9999-2222", data: new Date()},
  {id: 2, nome: "Sandra", telefone: "9999-3333", data: new Date()},
  {id: 3, nome: "Mariana", telefone: "9999-9999", data: new Date()}
];

app.get('/', function(req,res){
	res.json(contatos);
});

app.listen(3000, function(req, res){
	console.log("Servidor rodando com Express");
});