// app/routes/home.js
var controller = require('../controllers/home')();

module.exports = function(app) {
	//console.log(app)

	app.get('/index', controller.index);
	app.get('/', controller.index);
}