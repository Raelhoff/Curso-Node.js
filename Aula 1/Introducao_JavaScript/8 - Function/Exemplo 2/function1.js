var carro = {ano:2010, modelo:"gol", preco:15000}
var formulaIampostoA = function(preco){return preco*0.5;};
var formulaIampostoB = function(preco){return preco*0.2;};

var calcularPreco = function(produto, formulaImposto){
	return produto.preco + formulaImposto(produto.preco);
}

console.log(calcularPreco(carro, formulaIampostoA)); 
console.log(calcularPreco(carro, formulaIampostoB));