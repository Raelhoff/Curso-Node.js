var carros = ['corsa'];


console.log('1 - array -> \n ' + carros + '\n');

carros.unshift('Gol'); // adiciona parâmetro no início do array
console.log('2 - unshift (adiciona no inicio do array) \n -> ' + carros + '\n');


carros.shift('Gol'); // remove parâmetro no início do array
console.log('3 - shift (remove inicio do array) \n -> ' + carros + '\n');

carros.push('Gol'); // adiciona parâmetro no final
console.log('4 - push (adiciona no final do array) \n -> ' + carros + '\n');

carros.pop(); // remove a última posição
console.log('5 - pop (remove ultima posicao) \n -> ' + carros + '\n');


carros.push('Palio'); // adiciona parâmetro no final
carros.push('Golf'); // adiciona parâmetro no final
carros.push('Uno'); // adiciona parâmetro no final
carros.push('Fusca'); // adiciona parâmetro no final

carros.forEach(function(elemento, id){
	console.log('Id: ' + id + ' - elemento: '+ elemento);
});