module.exports = function(app) {

	var device = app.models.device;

	var controller = {};
	//console.log("contatos")

	controller.listaDevices = function(req, res) {
		device.find().exec()
    	.then(
      		function(devices) {
         		res.json(devices); 
         		console.log("GET devices");
       		},
       		function(erro) {
         		console.error(erro)
         		res.status(500).json(erro);
       		} 
    	);    
	};
	
	controller.saveDevice = function(req, res){
    	var _id = req.body._id;
      console.log(req.body)
           
    	if(_id) {
        io.emit('devices', req.body); 

     		device.findByIdAndUpdate(_id, req.body).exec()
     		.then(
      			function(device) {
        		res.json(device);
        		console.log("POST device");
      		}, 
      		function(erro) {
        		console.error("erro1")
        		res.status(500).json(erro);
      		}
     	);
    } else {
      io.emit('devices', req.body); 
      device.create(req.body)
      .then(
        function(device) {
          res.status(201).json(device);
        }, 
        function(erro) {
          console.log("erro2");
          res.status(500).json(erro);
        }
      );
    }
  };

	return controller;
};





