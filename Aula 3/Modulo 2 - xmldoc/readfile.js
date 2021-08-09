var xmldoc = require('xmldoc');
var fs 	   = require("fs");

//Criando xml passando string
var document = new xmldoc.XmlDocument("<some>xml</some>");
console.log(document.toString({compressed:true}) )// convertendo para string

//Criando xml passando arquivo xml 
//Synchronous read
var data = fs.readFileSync('./file.xml');
var XMLPessoa = new xmldoc.XmlDocument(data);

console.log('\n' + XMLPessoa.childNamed("dia").toString());
console.log(XMLPessoa.valueWithPath("dia") + "\n");


XMLPessoa.childNamed("pessoas").eachChild(function(child, index, array){
	//console.log(array);
	console.log('\n' + child.childNamed("sexo").toString());
	console.log(child.valueWithPath("sexo"));
	console.log(child.childNamed("primeironome").toString());
	console.log(child.valueWithPath("primeironome"));
	console.log(child.childNamed("últimonome").toString());
	console.log(child.valueWithPath("últimonome"));
})