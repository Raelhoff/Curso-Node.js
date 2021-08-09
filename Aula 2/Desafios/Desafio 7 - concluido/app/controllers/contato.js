module.exports = function(app) {

	var Contato = app.models.Contato;

	var controller = {};
	//console.log("contatos")

	controller.listaContatos = function(req, res) {
		Contato.find().exec()
    	.then(
      		function(contatos) {
         		res.json(contatos); 
         		console.log("GET contatos");
       		},
       		function(erro) {
         		console.error(erro)
         		res.status(500).json(erro);
       		} 
    	);    
	};
	
	controller.obtemContato = function(req, res) {
		var _id = req.params.id;
    	Contato.findById(_id).exec()
    	.then(
      			function(contatos) {
        			if (!contatos) throw new Error("Contato não encontrado");
          			res.json(contatos);
          			console.log("GET Contato ID");     
      			}, 
      			function(erro) {
        			console.log(erro);
   			     	res.status(404).json(erro)
      			}
    		);    
  	};
	//http://127.0.0.1:3333/contatos/1

	controller.saveContato = function(req, res){
		console.log(req);
    	var _id = req.body._id;
   
    	if(_id) {
     		Contato.findByIdAndUpdate(_id, req.body).exec()
     		.then(
      			function(contatos) {
        		res.json(contatos);
        		console.log("POST Contato");
      		}, 
      		function(erro) {
        		console.error(erro)
        		res.status(500).json(erro);
      		}
     	);
    } else {
      Contato.create(req.body)
      .then(
        function(contatos) {
          res.status(201).json(contatos);
        }, 
        function(erro) {
          console.log(erro);
          res.status(500).json(erro);
        }
      );
    }
  };
	// {"email":"raelhoff@gmail.com","nome":"Rafael"}
	controller.remove = function(req, res){
    	var _id = req.params.id;
    	console.log(_id);

   		Contato.remove({"_id" : _id}).exec()
    	.then(
      		function() {
        	res.send("REMOVE");
        	console.log("REMOVE Contato");
      }, 
      function(erro) {
        return console.error(erro);
      }
    );
  };

	controller.updateContato = function(req, res){
		console.log(req);
    	var _id = req.params.id;
   
    	if(_id) {
     		Contato.findByIdAndUpdate(_id, req.body).exec()
     		.then(
      			function(contatos) {
        		res.json(contatos);
        		console.log("POST Contato");
      		}, 
      		function(erro) {
        		console.error(erro)
        		res.status(500).json(erro);
      		}
     	);
     }
 	}
	//	var idContato = req.params.id;
	//	var verdade = false;
	//	console.log(idContato)
	//	if(idContato == undefined || req.body.nome == undefined ||  req.body.email == undefined){
	//		res.status(404).send('Erro ao excluir cadastro');
	//	}else{
	//		for(var i = 0; i < contatos.length; i++){
	//			if(contatos[i].id == idContato){
	//				verdade = true;
	//				contatos[i].nome  = req.body.nome;
	//				contatos[i].email = req.body.email;
	//			}
	//		}

	//		if(verdade){
	//			res.send("Atualizou contato");
	//		}else{
	//			res.send("Nao atualizou contato");
	//		}
	//	}
	//}

	return controller;
};