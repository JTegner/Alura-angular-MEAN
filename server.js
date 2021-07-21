var http = require('http'); 
var app = require('./config/express');
console.log(app);

require('./config/database')('localhost/alurapic');

//var db = require('./config/database'); nao precisa var porque nao retorna nada

http.createServer(app).listen(3000, function() { 
    console.log('Servidor iniciado');
}); 




