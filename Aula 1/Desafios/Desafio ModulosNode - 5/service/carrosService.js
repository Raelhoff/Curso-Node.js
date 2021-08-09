var carros = require('../data/carros');

var exibirCarros = function () {
	carros.forEach(function (carro) {
		console.log(carro);
	});
};

module.exports = {
	exibirCarros: exibirCarros
};