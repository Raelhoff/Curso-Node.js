var pessoa1 = { nome: "Rafael", idade: 32, endereco:{} }
var pessoa2 = { nome: "Pedro", idade: 34, endereco:{} }
var pessoa3 = { nome: "Paulo", idade: 28, endereco:{} }

var endereco1 = {rua:"Gilbeto Leal", numero:30, bairro:"Kobrasol", cidade:"Sao jose"}
var endereco2 = {rua:"Fabio Leal", numero:35, bairro:"Três Riachos", cidade:"Biguaçu"}
var endereco3 = {rua:"Pedro Leal", numero:45, bairro:"Pagani", cidade:"Palhoça"}

pessoa1.endereco = endereco1
pessoa2.endereco = endereco2
pessoa3.endereco = endereco3

var array = [];

array.push(pessoa1)
array.push(pessoa2)
array.push(pessoa3)

array.forEach(function(elemento, id){
	console.log('\n Id: ' + id + ' - elemento: '+ elemento);

	for(var k in elemento){
   		console.log(elemento[k]);
	} 
});

//Enumerando todas as propriedades de um objeto

//for...in loops
//->Esse método caminha por todas as propriedades enumeráveis de um objeto e sua cadeia de protótipos

//Object.keys(o)
//->Esse método retorna um array com todos os nomes ("chaves") de propriedades próprios de um objeto o (mas não na cadeia de protótipos).

//Object.getOwnPropertyNames(o)
//->Esse método retorna um array contendo todos os nomes de propriedades próprios (enumeráveis ou não) de um objeto o.

