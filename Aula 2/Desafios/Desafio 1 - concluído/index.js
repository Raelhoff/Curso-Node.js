
var carrosService = require('./service/carrosService');
var carrosHttp = require('./carrosHttp');
var teclado = require('./infra/teclado.js');

var httpMode = process.argv.some(function (arg) {
	return arg === '-http';
});

if (httpMode) {
	console.log("Http Mode");
	carrosHttp.listen(3000, function(){
		console.log('Servidor Hello World rodando!');
	});
	return;
}

console.log("Keyboard Mode");
teclado.aoDigitar(function (linha) {
	if (linha === '/q') process.exit();
	carrosService.exibirCarrosPorModelo(linha);
});