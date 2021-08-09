var http = require('http');

var carrosService = require('./service/carrosService');
  
var server = http.createServer(function (req, res) {
	var modelo = req.url;
	modelo = modelo.replace('\/','');
	//console.log(modelo)

  	res.writeHead(200, {
    	'Content-Type': 'text/html;charset=UTF-8'
  	});
  	res.write('<h1>Carros: '+ modelo + '</h1>');
  	var carros = carrosService.getCarrosPorModelo(modelo);
	carros.forEach(function (carro) {
		res.write('<h4>' + 'Modelo: ' + carro.modelo + '</h4>');
		res.write('<h5>' + 'Marca: ' + carro.marca + '</h5>');
		res.write('<h5>' + 'Versao: ' + carro.versao + '</h5>');
		res.write('<h5>' + 'Preco: ' + carro.preco + '</h5>');
		res.write('<h5>' + 'Ano: ' + carro.ano + '</h5>');
	});
	res.end();
});

module.exports = server;