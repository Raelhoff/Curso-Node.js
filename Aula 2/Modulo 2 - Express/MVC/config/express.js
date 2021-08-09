var express    = require('express');
var load       = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
  var app = express();

  app.set('port', 3000);

  // EJS: Template engine para implementação de html dinâmico;
  //temos que definir o motor de visualização para o nosso aplicativo Express 
  //Utilizaremos o engine EJS que possui uma sintaxe similar ao HTML   
  //No Express, template engines são configurados em variáveis de ambiente.
  app.set('view engine', 'ejs'); // ou jade
  app.set('views','./views');

  // novos middlewares
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

//express-load -> carregará todos os scripts dentro das pastas
//Consign -> successor to express-load (tambem poderia ser utilizado)

//app/models , app/controllers e app/routes

  load('models', {cwd: 'app'}) //Define por parâmetro {cwd: 'app'} o diretório padrão
    .then('controllers')
    .then('routes')
    .into(app);
//Um ponto importante é que precisamos carregar as pastas
//seguindo a ordem models, controllers e routes.
  return app;
};