var net = require ( 'net');


var client = net.connect ({port: 5555 }, function () {
   		console.log ( 'ligado ao servidor!');  
	});


client.on ( 'data', function (data) {
   console.log (data.toString ());
   client.end ();
});

client.on ( 'end', function () { 
   console.log ( 'conexao encerrada pelo servidor');
});