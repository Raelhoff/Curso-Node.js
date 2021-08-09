var Carro = function (marca, modelo, ano, cor, versao, preco) {
	this.marca  = marca;
	this.modelo = modelo;
	this.ano    = ano;
	this.cor    = cor;
	this.versao = versao;
	this.preco  = preco;
};

var carros = [
	new Carro("Wolksvagem","Gol", 2010, "Vermelho", "1.0", 22000),
	new Carro("Fiat", "Palio", 2012, "Branca", "1.0", 25000),
	new Carro("Chevrolet","Corsa", 2010,"Preto", "1.6", 20000),
	new Carro("Wolksvagem","Saveiro", 2015,"Branca", "1.6", 45000),
];


carros.forEach(function (carro) {
	console.log(carro);
});
