var fs    = require('fs');

var arquivo = fs.readFileSync('../data/carros.csv', 'utf8');


console.log(arquivo)