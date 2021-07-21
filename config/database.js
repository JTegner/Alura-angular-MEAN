module.exports = function(uri) {

    var mongoose = require('mongoose');

    //se estivesse na web no local de localhost fica o endereco na web
    mongoose.connect('mongodb://' + uri); 

    mongoose.connection.on('connected', function() {
        console.log('Conectado ao banco de dados');
    });

    mongoose.connection.on('error', function(error) {
        console.log('Erro na conexao: ' + error);
    });

    mongoose.connection.on('disconnected', function() {
        console.log('Desconectado do MongoDB');
    });

    //process eh implicito do node e da acesso a muitos eventos do sistema operacional
    //inclusive a finalizacao de uma aplicacao
    //se a aplicacao for finalizada vamos fazer o desconnect do banco
    //process eh global pode ser acessado de qualquer lugar
    process.on('SIGINT', function() {

        mongoose.connection.close(function() {
            console.log('Conexao fechada pelo termino da aplicacao');
            process.exit(0); //quando termina com zero foi algo esperado nao um erro
        });

    });

};