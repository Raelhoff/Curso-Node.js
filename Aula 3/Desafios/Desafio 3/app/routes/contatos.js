// app/routes/contato.js
module.exports = function(app) {
	var controller = app.controllers.contato;
	app.get('/contatos', controller.listaContatos);
	app.get('/contatos/:id', controller.obtemContato);

	app.post('/contatos', controller.saveContato);
	
	app.put('/contatos/:id', controller.updateContato);

	app.delete('/contatos/:id', controller.remove);
};