var app = require('./config/express')();
require('./config/database.js')('mongodb://localhost/Contatos');

app.listen(app.get('port'), function(req, res){
	console.log("Servidor rodando com Express");
});

