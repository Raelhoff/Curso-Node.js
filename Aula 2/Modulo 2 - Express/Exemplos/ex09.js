var express = require('express');
var app  = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var clientes = [];

app.get('/', function(req, res){
   var html = '<html><body>';
   html += '<form action="/cliente" method="post">';
   html += '<label>Nome: <input type="text" name="nome"></label><br>';
   html += '<br><label>Idade: <input type="text" name="idade"></label><br>';
   html += '<br><button type="submit">Enviar</button>';
   html += '</form>';
   html += '<br>';
   html += '<h1>Lista de clientes ok</h1>';
   html += '<ul>';
   for(var i = 0; i < clientes.length; i++){
     html += '<li>'+clientes[i].nome+' | '+clientes[i].idade;
   }
   html += '</ul></body></html>';
   res.send(html);
 });
 
 app.post('/cliente', function(req, res){
   var cliente = {};
   cliente.nome  = req.body.nome;
   cliente.idade = req.body.idade;
   console.log(req.body)
   clientes.push(cliente);
   res.redirect('/');
 });
 
 app.listen(3000,function(){
    console.log("Servidor escutando 3000")
 });