const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');


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

app.all('/CadastroCuidador', (req,res) =>{
    res.render('cuidador');
})

app.use((req,res) => {
    res.status(404)
    res.send(`<h1>Error 404: Resource not found</h1>`);
})

app.listen(2345, () => {
    console.log("zElo está aberto!");
})

module.exports = {
    app : app,
    path: path,
    express: express,
    session: session,
    bodyParser: bodyParser
}