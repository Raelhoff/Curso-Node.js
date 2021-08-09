const express = require('express')
const server = express()
var bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

Array.prototype.remove = function(start, end) {
  this.splice(start, end);
  return this;
}

Array.prototype.insert = function(pos, item) {
  this.splice(pos, 0, item);
  return this;
}

var Contatos = [];

server.get('/contatos', function(req, res){
   res.json(Contatos);
})

server.get('/contatos/:id', function(req, res){
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
  
server.post('/contatos', function(req, res){
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

server.put('/contatos/:id', function(req, res){
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

server.delete('/contatos/:id', function(req, res){
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


server.listen(3000, function (){
  console.log('Executando porta 3000')
});

