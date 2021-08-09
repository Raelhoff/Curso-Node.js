
//global 
var carrosService = require('./service/carrosService');
var teclado = require('./infra/teclado.js');


//carrosService.exibirCarros();

teclado.aoDigitar(function (linha) {
	//console.log(linha);
	//if (linha === '/q') process.exit();

	//setTimeout(function () {
		carrosService.exibirCarrosPorModelo(linha);
	//}, 1000);


});

