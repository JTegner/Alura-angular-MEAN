var express = require('express'); // 'express' tem que ser o mesmo nome da pasta node_modules
var app = express(); //criar instancia de express
var consign = require('consign');
//var bodyParser = require('body-parser');

app.set('secret','homemavestruz');//frase secreta JWT

/* temos dois middleware ativados o que compartilha a pasta public 
e o que vai popular a tag body
*/
app.use(express.static('./public')); //pasta que quero compartilhar arquivos estaticos acessivel para o navegador
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

//app.use(bodyParser.json());

/*
require('../app/routes/foto')(app);
require('../app/routes/grupo')(app);
*/

consign({ cwd: 'app'})
.include('models')
.then('api')
.then('routes/auth.js') //o consign carrega por orderm alfabetica mas para garantir que auth seja o primeiro indica-se o nome
.then('routes')
.into(app);


module.exports = app;
