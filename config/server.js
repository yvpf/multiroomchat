//Importar o módulo do framework express
var express = require('express');

//Importar o módulo do consign
var consign = require('consign');

//Importar o body-parser
var bodyParser = require('body-parser');

//Importar o módulo do express-validator
var expressValidator = require('express-validator');

//Inicar o objeto do express
var app = express();

//Configurar o ejs -- setar as variáveis 'view engine' e 'views'
app.set('view engine', 'ejs');
app.set('views', './app/views');

//Configurando o middleware express.static
app.use(express.static('./app/public'));

//Configurando o middleware body-parser
app.use(bodyParser.urlencoded({extended: true}));

//Configurando o middleware express-validator
app.use(expressValidator());

//Configurando o consign. Utilizado para autoload
consign()
    .include('app/routes')          //Recuperando rotas
    .then('app/models')             //Recuperando models
    .then('app/controllers')        //Recuperando os controllers
    .into(app);                     //Os loads realizados são colocados dentro de app


//Exportar o objeto app para uso nos demais lugares da aplicação
module.exports = app;
