var http = require('http'); 
var app = require('./config/express');
console.log(app);

http.createServer(app).listen(3000, function() { 
    console.log('Servidor iniciado');
}); 




