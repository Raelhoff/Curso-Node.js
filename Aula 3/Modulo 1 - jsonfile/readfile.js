var jsonfile = require('jsonfile')

//-------------READ FILE-------------------------
var file = './data.json'
//console.log(file)


jsonfile.readFile(file, function(err, obj) {
	if(err) {
		console.log("Erro")
	}else{
		console.log(" \nInformações Assíncronas: \n");
  		console.log(obj);
  	}
})

//-----------------------------------------------

//-------------READ FILESYC----------------------
var json = jsonfile.readFileSync(file);
//-----------------------------------------------
console.log(" \nInformações Síncronas:");
console.log(json.modulo);
console.log(json.curso);