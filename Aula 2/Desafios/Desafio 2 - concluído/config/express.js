var express = require('express');
var app = express();
var carrosService = require('../service/carrosService');

app.get('/', function (req, res) {
	res.send("<html><body>Bem vindo ao modo express</body></html>")
});

app.get('/carros', function (req, res) {
	res.json(carrosService.getCarros());
});

module.exports = app;