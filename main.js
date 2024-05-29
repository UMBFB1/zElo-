//Ferramentas
const db = require('./db');
const app = require('./app');
const { type } = require('os');
const { STRING } = require('sequelize');


//Cadastro Exemplo


const Cuidador = db.sequelize.define('Cuidadore', {
    CPF: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    data_nascimento: {
        type: db.Sequelize.DATE,
        allowNull: false,
    },
    telefone:  {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    experiencia: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    habilidade: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    curriculo: {
        type: db.Sequelize.BLOB,
    
    }
})

Cuidador.sync({force: true})


