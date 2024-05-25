//Banco de Dados
const Sequelize = require('sequelize')
const sequelize = new Sequelize('zElo', 'root', 'umbreongame2412', {
    host: 'localhost',
    dialect: 'mysql'
})
sequelize.authenticate().then(function(req,res){
    console.log("Banco de dados conectado");
}).catch(function(erro){
    console.log("Falha na conexão, causa" + erro);
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
