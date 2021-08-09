var express = require('express')
var server = express()

var array = [];

Array.prototype.remove = function(start, end) {
  this.splice(start, end);
  return this;
}

array.push("Rafael");
array.push("Pablo");
array.push("Pedro");
array.push("Livia");

server.get('/', function(req,res){
  res.send("<html><body>Faça uma pesquisa</body></html>")
});


server.route('/clientes')
  .get(function(req, res){
  	res.send('Lista de Clientes')
  })
  .post(function(req, res){
  	res.send('Novo cliente')
  })
  .put(function(req, res){
  	res.send('Altera Cliente')
  })
  .delete(function(req, res){
      array.remove(array.lenght -1, 1);
      res.json(array);
  }) 

server.listen(3000, function (){
	console.log('Executando porta 3000')
});
