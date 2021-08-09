// app/controllers/contato.js
Array.prototype.remove = function(start, end) {
  this.splice(start, end);
  return this;
}

Array.prototype.insert = function(pos, item) {
  this.splice(pos, 0, item);
  return this;
}
//exemplo
//var arr = [1, 2, 3, 4, 5];

//console.log(arr.remove(3, 1));
//  [1, 2, 3, 5]

//console.log(arr.insert(3, 0));
// [1, 2, 3, 0, 5]


var contatos = [
	{id: 1, nome: 'Contato Exemplo 1',
		email: 'cont1@empresa.com.br'},
	{id: 2, nome: 'Contato Exemplo 2',
		email: 'cont2@empresa.com.br'},
	{id: 3, nome: 'Contato Exemplo 3',
		email: 'cont3@empresa.com.br'}
	];



module.exports = function() {
	var controller = {};
	//console.log("contatos")

	controller.listaContatos = function(req, res) {
		res.json(contatos);
		//console.log(req)
	};
	
	controller.obtemContato = function(req, res) {
		var idContato = req.params.id;
		var contato = undefined;
		console.log(idContato)
		//console.log(req)
		contato = contatos.filter(function(contato) {
		return contato.id == idContato;
	});
		contato ? res.json(contato) : 
		res.status(404).send('Contato não encontrado');
	};
	//http://127.0.0.1:3333/contatos/1

	controller.saveContato = function(req, res){
		var newuser = req.body;
		var objeto = {};
		console.log(req)
		if(req.body.nome == undefined ||  req.body.email == undefined){
			res.status(404).send('Erro ao cadastrar');
		}else{
			objeto.id = contatos.length + 1;
			objeto.nome = req.body.nome;
			objeto.email = req.body.email;

			console.log(objeto)
			contatos.push(objeto)
			res.send("salvo contato");
		}
	};
	// {"email":"raelhoff@gmail.com","nome":"Rafael"}
	controller.remove = function(req, res){
		var idContato = req.params.id;
		var verdade = false;
		console.log(idContato)
		if(idContato == undefined){
			res.status(404).send('Erro ao excluir cadastro');
		}else{
			var posicao = -1;
			for(var i = 0; i < contatos.length; i++){
				if(contatos[i].id == idContato){
					verdade = true;
					posicao = i;
				}
			}

			if(verdade){
				contatos = contatos.remove(posicao, 1);
				res.send("removeu contato");
			}else{
				res.send("Nao removeu contato");
			}
		}
	}

	controller.updateContato = function(req, res){
		var idContato = req.params.id;
		var verdade = false;
		console.log(idContato)
		if(idContato == undefined || req.body.nome == undefined ||  req.body.email == undefined){
			res.status(404).send('Erro ao atualizar cadastro');
		}else{
			for(var i = 0; i < contatos.length; i++){
				if(contatos[i].id == idContato){
					verdade = true;
					contatos[i].nome  = req.body.nome;
					contatos[i].email = req.body.email;
				}
			}

			if(verdade){
				res.send("Atualizou contato");
			}else{
				res.send("Nao atualizou contato");
			}
		}
	}

	return controller;
};