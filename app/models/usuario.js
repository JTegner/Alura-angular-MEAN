var mongoose = require('mongoose');

var schema = mongoose.Schema({ // eh uma funcao construtora por isso comeca com letra maiuscula

    login: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    }

}); 

mongoose.model('Usuario', schema); // compila


//o mongoose acessa o schema Foto e devolve o que leu em fotos, acrescenta um s no final
//isso eh padrao no mongoose la no api/fotos.js onde eh chamado





