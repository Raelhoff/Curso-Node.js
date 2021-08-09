var help = require('./help');
var keyboard = require('./keyboard');

help.showOptions();
keyboard.aoDigitar(function (entrada) {
	//console.log("tecla: " + entrada.toString().replace(/\n/, ''));

	switch(entrada.toString().replace(/\n/, '')) {
		case "a":
			console.log('pid: ' + process.pid);
			break;
		case 'b':
			console.log('title: ' + process.title);
			break;
		case 'c':
			console.log('arch: ' + process.arch);
			break;
		case 'd':
			console.log('platform: ' + process.platform);
			break;
		case 'e':
			console.dir(process.env); //propriedade retorna um objeto que contém o ambiente do usuário
			break;
		case 'm':
			console.log(process.memoryUsage());
			break;
		case 'u':
			console.log('uptime: ' + process.uptime()); // método retorna o número de segundos que o processo Node.js atual foi executado.
			break;
		case 'v':
			console.dir(process.versions); // lista as seqüências de versão de Node.js e suas dependências. 
			break;
		case 'q':
			process.exit();
		default:
			help.showOptions();
	}
});

process.on('exit', function () {
	console.log('bye');
});


