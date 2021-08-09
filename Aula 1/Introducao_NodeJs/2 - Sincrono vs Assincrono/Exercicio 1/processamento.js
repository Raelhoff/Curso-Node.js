var http = require('http');
var fs = require('fs');
var leituraAsync = require('./leitura_async');
var leituraSync = require('./leitura_sync');
var arquivo = "./node.exe";

if(!fs.existsSync(arquivo)){
	var stream = fs.createWriteStream(arquivo);
	var download = "http://nodejs.org/dist/latest/win-x64/node.exe";

	http.get(download, function(res) {
		console.log("Fazendo download do Node.js");
		res.on('data', function(data){
		stream.write(data);
		});
		res.on('end', function(){
		stream.end();
		console.log("Download finalizado!");
		leituraAsync(arquivo);
		leituraSync(arquivo);
		});
	});
}else{
	leituraAsync(arquivo);
	leituraSync(arquivo);
}

