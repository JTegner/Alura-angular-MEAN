module.exports = function(app) {

    var api = app.api.auth;

    app.post('/autenticar', api.autentica);
    /*
    app.get('/*', api.verificaToken); //qualquer url, recurso, que for acessado no backend tem que ser validado
    //cuidar com a ordem se a '/*' fosse a primeira a autenticar tb estaria protegida e essa nao pode
    */
    app.use('/*', api.verificaToken);
    // se fosse get teria que criar para o post tambem e assim sucessivamente
    //entao 'use' engloba todos os tipos de verbo http

};
