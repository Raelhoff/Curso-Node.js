var mongoose = require('mongoose');
//Esquemas e Modelo
module.exports = function(){
  var deviceSchema = new mongoose.Schema({
      id_device: Number,
      name_device: String,
      device_value: Number
  });

  return mongoose.model('device', deviceSchema);
}
