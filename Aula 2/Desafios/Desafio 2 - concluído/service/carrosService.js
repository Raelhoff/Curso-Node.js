var carros = require('../readcarros');

var getCarros = function () {
	return carros;
};


var exibirCarrosPorModelo = function (modelo) {
	var carrosEncontrados = [];

	carros.forEach(function(aux){
		var valor = aux.modelo.localeCompare(modelo);
		if( aux.modelo.toString() === modelo.toString()){
			carrosEncontrados.push(aux) ;
		};
	})

	if (carrosEncontrados.length === 0) {
		console.log("Nenhum carro foi encontrado!");
		return;
	}

	carrosEncontrados.forEach(function(carro){
		console.log(carro);
	});
};


var getCarrosPorModelo = function(modelo){
	var carrosEncontrados = [];
	
	carros.forEach(function(aux){
		if( aux.modelo.toString() === modelo){
			carrosEncontrados.push(aux) ;
		};
	})

	return carrosEncontrados;
};


module.exports = {
	getCarros: getCarros,
	exibirCarrosPorModelo:exibirCarrosPorModelo,
	getCarrosPorModelo:getCarrosPorModelo 
};