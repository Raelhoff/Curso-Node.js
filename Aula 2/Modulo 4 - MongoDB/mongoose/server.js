require('./database.js')('mongodb://localhost/test');
controller = require('./controller')(); // crud


	//controller.save('Ilha do Medo', "suspense", 2010, true);
	//controller.save('O Chamado', "terro", 2017, false);
	//controller.save('Titanic', "romance", 1997, true);
	//controller.save('As Branquelas', "comedia", 2004, false);

	// Lista todos os filmes
	//controller.listatodos();

	// Buscando um unico filme pelo nome
	controller.buscaFilmeNome('O Chamado');
	
	// Buscando todos os filmes 
//	controller.buscafileporAno(2017); 


	//delete filme
	//controller.removefilme('592792852f40271dac8f492f'); 
	//controller.listatodos();
  

  	//atualiza filme
  	//var objeto = {};
  	//	objeto.nome = "Logan";
  	//	objeto.genero = "acao";
  	//	objeto.ano = 2017;
 		//objeto.assistido = false;

  	//	controller.updatefilme('592792852f40271dac8f492d', objeto);