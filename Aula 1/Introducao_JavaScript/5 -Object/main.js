var carro = { ano: 2010, modelo: 'gol', 'cor do carro': 'vermelho' }

carro.marca  = "wolksvagem" // erro
console.log(carro);


carro["cor do carro"] = "vermelho";
console.log(carro);

typeof carro // object

//Enumerando todas as propriedades de um objeto

//for...in loops
//->Esse método caminha por todas as propriedades enumeráveis de um objeto
console.log("\n for...in loops")
for(var k in carro){
   		console.log(k + " : "+ carro[k]);
	} 

//Object.keys(o)
//->Esse método retorna um array com todos os nomes ("chaves") de propriedades próprios de um objeto.
console.log("\n Object.keys")
console.log(Object.keys(carro))

