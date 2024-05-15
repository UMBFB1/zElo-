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
app.use(express.static('layout'));
app.use(session({secret:'Aleatorio'}));
app.use(bodyParser.urlencoded({extended: true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/layout', express.static(path.join(__dirname + 'layout')));
app.set('main', path.join(__dirname + '/view'));
app.set('view', path.join(__dirname +  '/view'));
app.get('/', (req, res) => {
    res.render('index');
})

//Aplicativo
app.post('/', (req,res) => {
    if(req.body.password == password && req.body.login == login ){
        req.session.login = login;
        res.render('main')

    }else {
        res.render('index');
    }
    
})

app.get('/', (req,res) => {
    if(req.session.login){
        res.render('main');
        console.log('O usuario legado é: ' + req.session.login)
    }else{
        res.render('index');
    }
})


app.use((req,res) => {
    res.status(404)
    res.send(`<h1>Error 404: Resource not found</h1>`);
})

app.listen(2345, () => {
    console.log("zElo está aberto!");
})