var getAno = function(){
return this.ano;
}
var carro = { 
	ano: 2010,
	modelo:"gol",
	getAno:getAno
}

console.log(carro.getAno()); 
console.log(getAno());
console.log(getAno.call(carro)); 
