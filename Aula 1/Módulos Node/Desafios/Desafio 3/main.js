var readline = require('readline');

var rl = readline.createInterface({
	input:process.stdin,
	output:process.stout
});

rl.on('line', function(answer){
	var linha = (answer) ? answer.toString() : '';
	linha = linha.replace(/\n/, '');
	if (linha) {
		console.log(linha)
	}	
});

