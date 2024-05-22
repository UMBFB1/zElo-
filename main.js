//Ferramentas
const express = require('express');
const session = require('express-session');
const app = express();
const Sequelize = require('sequelize');
const path = require('path');
const bodyParser = require('body-parser');
var password = 's123.';
var login = 'adm@gmail'

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
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret: 'Aleatorio'}));
app.set('view engine', 'html');
app.use(express.static('layout'));
app.use('/view', express.static(path.join(__dirname, 'view')));
app.set('views', path.join(__dirname, '/view'));


//Aplicativo 
app.all('/', (req,res) => {
    res.render('index');
})


app.all('/loadingCuidador', (req,res) => {
    res.render('loading');
})

app.all('/loadingPreciso', (req,res) =>{
    res.render('loading2')
})

app.all('/Cuidador', (req,res) =>{
    res.render('cuidador');
})

app.use((req,res) => {
    res.status(404)
    res.send(`<h1>Error 404: Resource not found</h1>`);
})

app.listen(2345, () => {
    console.log("zElo está aberto!");
})