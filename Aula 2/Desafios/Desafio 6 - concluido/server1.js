var express = require('express')
var server = express();
var bodyParser = require('body-parser');
var request = require('request');

var sendPost = function(){
 console.log("Realizando request post");
 request.post('http://127.0.0.1:3333/keepalive', {
      form:{ alive:'@'}
    })
    .on('response', function(response) {
        console.log(response.statusCode); // 200
    })
    .on('error', function(err) {
          console.error(err);
    })
}

//bodyParser é utilizado para popular req.body com os parâmetros do POST.
//configurando bodyParser para realizar o parse do json e requisições com
// o corpo bodyParser x-ww-form-urlencoded
server.use(bodyParser.urlencoded({extended: true}));
//Isso permite acessar os dados da requisição por meio de req.body
server.use(bodyParser.json());


server.post('/keepalive', function(req, res) {
	console.log(req.body.alive)
 	res.send("ok");
})

 setInterval(function(){ 
	sendPost(); 

 }, 3000);

server.listen(3000, function (){
	console.log('Executando porta 3000')
});
