const express = require('express')
var jwt = require("jwt-simple");  
var auth = require("./config/auth.js")();  
var users = require("./model/users.js");  
var cfg = require("./config/config.js");  
const server = express()
var bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(auth.initialize());

Array.prototype.remove = function(start, end) {
  this.splice(start, end);
  return this;
}

Array.prototype.insert = function(pos, item) {
  this.splice(pos, 0, item);
  return this;
}

var Contatos = [];

server.get('/contatos', auth.authenticate(), function(req, res){
   res.json(Contatos);
})

server.get('/contatos/:id', auth.authenticate(), function(req, res){
    var idContato = req.params.id;
    var contato = undefined;
    console.log(idContato)
    console.log(Contatos)
    contato = Contatos.filter(function(contato) {
        return contato.id == idContato;
    })[0];
    contato ? res.json(contato) : 
    res.status(404).send('Contato não encontrado');
  });
  //http://127.0.0.1:3000/contatos/1
  
server.post('/contatos', auth.authenticate(), function(req, res){
    var newuser = req.body;
    var objeto = {};
    console.log(req)
    if(req.body.nome == undefined ||  req.body.email == undefined){
      res.status(404).send('Erro ao cadastrar novo usuario');
    }else{
      objeto.id   = req.body.id;
      objeto.nome  = req.body.nome;
      objeto.email = req.body.email;

      console.log(objeto)
      Contatos.push(objeto)
      res.send("salvo contato");
    }
  })

server.put('/contatos/:id', auth.authenticate(), function(req, res){
  var idContato = req.params.id;
    var verdade = false;
    console.log(idContato)
    if(idContato == undefined || req.body.nome == undefined ||  req.body.email == undefined){
      res.status(404).send('Erro ao excluir cadastro');
    }else{
      for(var i = 0; i < Contatos.length; i++){
        if(Contatos[i].id == idContato){
          verdade = true;
          Contatos[i].nome  = req.body.nome;
          Contatos[i].email = req.body.email;
        }
      }

      if(verdade){
        res.send("Atualizou contato");
      }else{
        res.send("Nao atualizou contato");
      }
    }
  });

server.delete('/contatos/:id', auth.authenticate(), function(req, res){
  var idContato = req.params.id;
    var verdade = false;
    console.log(idContato)
    if(idContato == undefined){
      res.status(404).send('Erro ao excluir cadastro');
    }else{
      var posicao = -1;
      for(var i = 0; i < Contatos.length; i++){
        if(Contatos[i].id == idContato){
          verdade = true;
          posicao = i;
        }
      }

      if(verdade){
        Contatos = Contatos.remove(posicao, 1);
        res.send("removeu contato");
      }else{
        res.send("Nao removeu contato");
      }
    }
  });

server.post("/token", function(req, res) {  
    if (req.body.email && req.body.password) {
        var email = req.body.email;
        var password = req.body.password;
        var user = users.find(function(u) {
            return u.email === email && u.password === password;
        });
        if (user) {
            var payload = {
                id: user.id
            };
            var token = jwt.encode(payload, cfg.jwtSecret);
            res.json({
                token: token
            });
        } else {
            res.sendStatus(401);
        }
    } else {
        res.sendStatus(401);
    }
});


server.get("/", function(req, res) {  
    res.json({
        status: "Minha API esta executando!"
    });
});

server.listen(3000, function (){
  console.log('Executando porta 3000')
});

