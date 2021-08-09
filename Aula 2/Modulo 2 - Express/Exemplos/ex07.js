var express = require('express')
var server = express()

server.use((req, res, next) => {
  var init = Date.now()
  next()
  console.log(`Tempo = ${Date.now() - init} ms.`)
})

//127.0.0.1:3000/produtos/1
server.get('/produtos/:id', function(req, res){
	 res.json({id: req.params.id, name: 'Caneta'})
})

//127.0.0.1:3000/clientes/1/rafael
server.get('/clientes/:id/:name', function(req, res){
  res.json({id: req.params.id, name: req.params.name})
})

server.listen(3000, function (){
	console.log('Executando porta 3000')
});
