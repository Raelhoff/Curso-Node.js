var express = require('express')
var server = express()

server.get('/', function(req, res) {
  res.send('<h1>Index!</h1>')
})

server.all('/teste', function(req, res) {
  res.send('<h1>Teste!</h1>')
})

server.listen(3000, function (){
	console.log('Executando porta 3000')
});
