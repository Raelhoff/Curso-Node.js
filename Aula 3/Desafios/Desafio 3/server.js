var app = require('./config/express')();


app.listen(app.get('port'), function(req, res){
	console.log("Servidor rodando com Express");
});

