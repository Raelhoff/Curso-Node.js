function criarCarro1(modelo, marca, ano, preco){
		this.modelo = modelo;
		this.marca  = marca;
		this.ano    = ano;
		this.preco  = preco;
}

function criarCarro2(modelo, marca, ano, preco){
	return{
		modelo:modelo,
		marca:marca,
		ano:ano,
		preco:preco
	}
}

//https://www.w3schools.com/jsref/jsref_sort.asp

function sortMaior(a,b){
	return (b.preco - a.preco);
}

function sortMenor(a,b){
	return (a.preco - b.preco);
}


var array = [];


array.push(new criarCarro1("Gol", "Wolksvagem",2010, 22000));
array.push(new criarCarro1("Palio", "Fiat",2012, 25000));
array.push(new criarCarro1("Corsa", "Chevrolet",2010, 15000));
array.push(new criarCarro1("Saveiro", "Wolksvagem",2015, 45000));

/*
	array.push(criarCarro2("Gol", "Wolksvagem",2010, 22000));
	array.push(criarCarro2("Palio", "Fiat",2012, 25000));
	array.push(criarCarro2("Corsa", "Chevrolet",2010, 15000));
	array.push(criarCarro2("Saveiro", "Wolksvagem",2015, 45000));
*/
//console.log(array[0]);
//console.log(array[1]);
//console.log(array[2]);
//console.log(array[3]);

array.sort(sortMaior);
console.log("\n Maior Preco:  " + array[0].modelo);

array.sort(sortMenor);
console.log("\n Menor Preco:  " + array[0].modelo);

