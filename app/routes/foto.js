//var api = require('../api/foto'); foi para include consign express

module.exports = function(app) {

    /*
    app.get('/v1/fotos', function(req, res) {
        console.log('Tentando obter as fotos?');

        var fotos = [
            {_id: 1, titulo: 'Leão', url:'http://www.fundosanimais.com/Minis/leoes.jpg' },
            {_id: 2, titulo: 'Leão 2', url:'http://www.fundosanimais.com/Minis/leoes.jpg' }
        ];

        res.json(fotos);
    });
    */

    var api = app.api.foto;

    //app.get('/v1/fotos', api.lista);

    app.route('/v1/fotos')
        .get(api.lista)
        .post(api.adiciona);

    app.route('/v1/fotos/:id')
        .get(api.buscaPorId)
        .delete(api.removePorId)
        .put(api.atualiza);

    /*
    app.get('/v1/fotos/:id', api.buscaPorId);
    app.delete('/v1/fotos/:id', api.removePorId);
    */
};

