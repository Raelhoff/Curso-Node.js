var express = require('express')
var server = express();
var bodyParser = require('body-parser');

var Produtos = [];

//bodyParser é utilizado para popular req.body com os parâmetros do POST.
//configurando bodyParser para realizar o parse do json e requisições com
// o corpo bodyParser x-ww-form-urlencoded
server.use(bodyParser.urlencoded({extended: true}));
//Isso permite acessar os dados da requisição por meio de req.body
server.use(bodyParser.json());

server.use((req, res, next) => {
  const init = Date.now()
  next()
  console.log(`Tempo = ${Date.now() - init} ms.`)
})

server.get('/produtos', function(req, res){
	console.log(req)
	 res.json(Produtos)
})

server.get('/produtos/:id', function(req, res){
	 Produtos.forEach(function(element){
	 	if(element.id == req.params.id){
	 		res.json(element);
	 	}else{
	 		res.send("<h1>erro</h1>")
	 	}
	})
})

	//console.log(req)
server.post('/produtos', function(req, res){
	var objeto = {};
	objeto.id   = req.body.id;
	objeto.nome = req.body.nome;
 	Produtos.push(objeto);
 	res.send("<h1>Dado Inserido!</h1>");
})


server.listen(3000, function (){
	console.log('Executando porta 3000')
});
