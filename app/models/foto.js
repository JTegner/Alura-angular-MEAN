var mongoose = require('mongoose');

var schema = mongoose.Schema({ // eh uma funcao construtora por isso comeca com letra maiuscula

    titulo: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    grupo: {
        type: Number,
        required: true
    }

}); 

mongoose.model('Foto', schema); // compila

//o mongoose acessa o schema Foto e devolve o que leu em fotos, acrescenta um s no final
//isso eh padrao no mongoose la no api/fotos.js onde eh chamado





