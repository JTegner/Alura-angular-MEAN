var http = require('http'); // importando o módulo http do node

http.createServer(function(req, res){
    //res.end('Servidor criado browser');
    var indice = req.url.indexOf('=');
    var parametro = req.url.substr(indice+1);
    res.end(parametro);
    //res.end(req.url); // recurso que esta sendo passado para o servidor usuario=jordano

    console.log('Servidor criado backend');

}).listen(3000, function() { //todo servidor precisa escutar em uma porta
    console.log('Olá mundo!')
}); 







