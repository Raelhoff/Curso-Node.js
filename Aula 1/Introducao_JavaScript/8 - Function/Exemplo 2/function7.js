var criarCarro = function (ano, modelo){
	this.ano      =  ano;
	this.modelo = modelo;
}
console.log(new criarCarro(2012, 'Fox'));
console.log(new criarCarro(2015, 'Fiesta')); 