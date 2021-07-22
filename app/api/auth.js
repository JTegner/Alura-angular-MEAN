module.exports = function(app) {

    var mongoose = require('mongoose');
    var jwt = require('jsonwebtoken');

    var api = {};

    var model = mongoose.model('Usuario');

    api.autentica = function(req,res) {
        console.log(req.body);
        model
            .findOne({login: req.body.login, senha: req.body.senha})
            .then(function(usuario) {
                if(!usuario) {
                    console.log('Login e senha inválidos');
                    res.sendStatus(401); //nao autorizado
                } else {
                    //criar o token
                    var token = jwt.sign({login:usuario.login}, 
                                          app.get('secret'),
                                          {expiresIn: 84600}); // 84600 em segundos = 24 horas
                    console.log('Token criado e sendo enviado no header de resposta');
                    res.set('x-access-token', token);
                    res.end();
                }
            }, function(error) {
                console.log('error: Login e senha inválidos');
                res.sendStatus(401);
        });

    };

    api.verificaToken = function(req, res, next) {

        var token = req.headers['x-access-token'];
        if(token) {
            console.log('Verificando Token');
            jwt.verify(token, app.get('secret'), function(err, tokenDecoded) {
                if(err) {
                    console.log('Token rejeitado');
                    res.sendStatus(401);
                }
                res.usuario = tokenDecoded;
                next();
                /*
                em routes/auth.js foi usando app.use(
                o use habilita um terceiro parametro na funcao que eh o next
                o next quer dizer que o proximo middleware pode ser executado, 
                ou seja, todas as outras rotas podem ser executadas
                */
            });
        } else {
            console.log('Token nao foi enviado');
            res.sendStatus(401);
        };
    };

    return api;

};
