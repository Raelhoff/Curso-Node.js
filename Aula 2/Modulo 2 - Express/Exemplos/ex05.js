const express = require('express')
const server = express()

server.use(function(req, res, next) {
 //1° executou console.log(inicio)
  console.log('Inicio...')
  //1°vai procurar proxima requeste '/'
  next()
  //3° executou console.log(Fim)
  console.log('Fim...')
})

server.use(function(req, res) {
//2°	executou console.log(Resposta) e res.send()	
  console.log('Resposta...')
  res.send('<h1>API!</h1>')
})

server.listen(3000, function (){
	console.log('Executando porta 3000')
});
