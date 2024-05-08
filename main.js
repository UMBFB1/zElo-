//Ferramentas
const express = require('express');
const session = require('express-session');
const app = express();
const Sequelize = require('sequelize');
const path = require('path');
const bodyParser = require('body-parser');

//Conexão ao Banco de Dados
const sequelize = new Sequelize('zElo', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
sequelize.authenticate().then(function(req,res){
    console.log("Banco de dados conectado");
}).catch(function(erro){
    console.log("Falha na conexão, causa" + erro);
})

//Conexão ao FrontEnd
app.use(express.static('layout'));
app.use(session({secret:'Aleatorio'}));
app.use(bodyParser.urlencoded({extended: true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/layout', express.static(path.join(__dirname + 'layout')));
app.set('view', path.join(__dirname +  '/view'));
app.get('/', (req, res) => {
    res.render('index');
})

//Aplicativo

app.use((req,res) => {
    res.status(404)
    res.send(`<h1>Error 404: Resource not found</h1>`);
})

app.listen(2345, () => {
    console.log("zElo está aberto!");
})