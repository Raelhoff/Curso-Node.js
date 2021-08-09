// app/routes/contato.js
module.exports = function(app) {
	var controller = app.controllers.device;
	app.get('/devices', controller.listaDevices);
	app.post('/device', controller.saveDevice);
};



