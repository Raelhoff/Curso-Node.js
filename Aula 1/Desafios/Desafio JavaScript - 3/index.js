var fs = require('fs')
var obj = {};
	obj.myNome = undefined
	obj.myIdade = undefined

function ReadFile(callback) {
  fs.readFile('./input.txt', function doneReading(err, data) {
    callback(data.toString()) 
  })
}

function updateObject(data){
	var array   = data.split(',');
	obj.myNome  = array[0];
	obj.myIdade = array[1];
	logMyObject();
} 

function logMyObject() {
	console.log(obj)
}

// Passando função logMyObject por referência
ReadFile(updateObject)