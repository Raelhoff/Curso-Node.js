var getAno = function(extra){
	console.log(arguments);
	return this.ano + extra;
}

var carro = { 
	ano: 2010,
	modelo:"gol",
	getAno:getAno
}

console.log(carro.getAno(2));
console.log(getAno.call(carro, 2)); // 2012
console.log(getAno.apply(carro,[ 2])); // 2012

