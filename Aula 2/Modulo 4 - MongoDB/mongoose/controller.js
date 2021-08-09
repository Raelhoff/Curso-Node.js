//Criar, Recuperar, Atualizar e Deletar (CRUD)
var mongo = require('./model')()

module.exports = function () {
	controller = {};

	// Buscando todos os filmes
	controller.listatodos = function() {
		mongo.find(function(err, movies) {
  			if (err) return console.error(err);
  			console.log(movies);
		});
	};

	// Buscando um unico filme pelo nome
	controller.buscaFilmeNome = function(v_nome) {
		mongo.findOne({ nome: v_nome }, function(err, name) {
  		if (err) return console.error(err);
  			console.log(name);
		});
	};
	

	// Buscando todos filmes por ano.
	controller.buscafileporAno = function(v_ano) {
		mongo.find({ ano: v_ano }, function(err, movies) {
  			if (err) return console.error(err);
  			console.log(movies);
		});
	};

	// salva filme
	controller.save = function(v_nome, v_genero, v_ano, v_assistido){
		var movie = new mongo({
  			nome: v_nome,
  			genero: v_genero,
  			ano: v_ano,  
  			assistido: v_assistido
		});

		movie.save(function(err, element) {
  			if (err) return console.error(err);
  			console.log(element);
		});
	}

	// remove filme
	controller.removefilme = function(_id){
        console.log(_id);
 
        mongo.remove({"_id" : _id}, function(err, element) {
            if (err) return console.error(err);
  			console.log("deletou id: " + _id);
    	});
    }
  
  //atualiza filme
  controller.updatefilme = function(_id, objeto){
       if(_id) {
            mongo.findByIdAndUpdate(_id, objeto, function(err, element) {
            	 if (err) return console.error(err);
  					console.log("Atualizou objeto: " + element + " para " + objeto);
            });
           
     	}
    };
  


	return controller;
}