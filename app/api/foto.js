var api = {};

var CONTADOR = 2;

var fotos = [
    {_id: 1, titulo: 'Leão', url:'http://www.fundosanimais.com/Minis/leoes.jpg' },
    {_id: 2, titulo: 'Leão 2', url:'http://www.fundosanimais.com/Minis/leoes.jpg' }
];


api.lista = function(req,res) {
    res.json(fotos);
};

api.buscaPorId = function(req, res) {
    console.log('id: ' + req.params.id);
    var foto = fotos.find(function (foto) {
        return foto._id == req.params.id;
    }) ;

    res.json(foto);

};

api.removePorId = function(req, res) {
    console.log('id: ' + req.params.id);
    /* a variavel fotos sera filtrada, nela ficarao somente as fotos diferentes do id
    ou seja a foto informada no id nao fara mais parte da lista fotos
    */
    fotos = fotos.filter(function (foto) {
        return foto._id != req.params.id;
    }) ;

    res.sendStatus(204); // 204 = ok para o navegador sem devolver informacao de volta
    /*
    ou
    res.status(204).end();
    */

};

api.adiciona = function(req, res) {
    //console.log(req.body);
    var foto = req.body;
    foto._id = ++CONTADOR;
    fotos.push(foto);

    res.json(foto);
};

api.atualiza = function(req, res) {
    var foto = req.body;
    var fotoId = req.params.id;
    
    //dado o ID eu quero saber em qual posicao ela se ecnontra no array
    var indice = fotos.findIndex(function(foto) {
        return foto._id == fotoId;
    });

    fotos[indice] = foto;

    res.sendStatus(200); //resposta para o nevegador, ele fica esperando
};

module.exports = api;
