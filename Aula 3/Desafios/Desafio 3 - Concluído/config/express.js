var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var ControlLog     = require('./LogSystem/ControlLog')();
log4js         = ControlLog.Inicializa(), 
logfile        = log4js.getLogger('file'),
logconsole     = log4js.getLogger ('console'),
Log            = require('./LogSystem/WriteLog')(),
logDefined     = require('./LogSystem/defined')();


module.exports = function() {
  var app = express();

  app.set('port', 3000);

  app.use(express.static('./public'));
  app.set('view engine', 'ejs');
  app.set('views','./app/views');
  // novos middlewares
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  //app.use(require('method-override')());

  load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};