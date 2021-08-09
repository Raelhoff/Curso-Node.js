var express = require('express')
var server = express();
var bodyParser = require('body-parser');

//bodyParser é utilizado para popular req.body com os parâmetros do POST.
//configurando bodyParser para realizar o parse do json e requisições com
// o corpo bodyParser x-ww-form-urlencoded
server.use(bodyParser.urlencoded({extended: true}));
//Isso permite acessar os dados da requisição por meio de req.body
server.use(bodyParser.json());

var name = null ;

server.get('/name', function(req, res) {
	console.log(name)
	res.send(name);
})

server.post('/name', function(req, res) {
	console.log(req.body)
   name =  req.body.nome;

  res.send("Atualizado");
})


server.listen(3000, function (){
	console.log('Executando porta 3000')
});
