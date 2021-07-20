var http = require('http'); // importando o módulo http do node
var app = require('./config/express');


http.createServer(function(req, res){

    if(req.url.startsWith('/index.html')) {
        res.end('index.html');
    }

    if(req.url.startsWith('/estilos.css')) {
        res.end('estilos.css');
    }

    console.log('Servidor criado backend');

}).listen(3000, function() { //todo servidor precisa escutar em uma porta
    console.log('Olá mundo!')
}); 



