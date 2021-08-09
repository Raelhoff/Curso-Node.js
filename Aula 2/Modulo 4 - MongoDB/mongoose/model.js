var mongoose = require('mongoose');
//Esquemas e Modelo
module.exports = function(){
	var movieSchema = new mongoose.Schema({
  		nome: { type: String },
  		genero: String,
  		ano: Number,
 	 	assistido: Boolean
	});

	return mongoose.model('Movie', movieSchema);
}
