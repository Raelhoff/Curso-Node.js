var Carro = require('./carro');
var fs    = require('fs');
var carros = [];

function ExibeCarros(){
	console.log(carros);
}

var carregarCarros = function (callback) {
	fs.readFile('./carros.csv', 'utf8', function (err, csv) {
		if (err) {
			console.log(err);
			return;
		}

		var linhas = csv.split('\n');
		linhas.forEach(function (linha) {
			var propriedades = linha.split(';');
			var aux = new Carro(propriedades[0], propriedades[1], propriedades[2], propriedades[3], propriedades[4], propriedades[5]);
			carros.push(aux);
		})

		//callback();
	});
	
};

carregarCarros(ExibeCarros);

module.exports = carros;