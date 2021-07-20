//var api = require('../api/grupo'); foi para include consign express

module.exports = function(app) {

    /*
    app.get('/v1/grupos', function(req, res) {

        var grupos = [
            {_id: 1, nome: 'esporte' },
            {_id: 2, nome: 'lugares' },foi para include consign express

    
        res.json(grupos);
    });
    */

    var api = app.api.grupo;
    app.get('/v1/grupos', api.lista);

};

