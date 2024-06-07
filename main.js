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

const Responsavel = db.sequelize.define('Responsavei', {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    idade: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
    },
    CPF: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        unique: true,
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
        allowNull: false,
    },
    preferencia_de_cuidador: {
        type: db.Sequelize.TEXT,
        allowNull: true
    }
})

const Idoso = db.sequelize.define('Idoso', {
    ome: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    idade: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
    },
    CPF: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        unique: true,
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
    preferencia_de_atv: {
        type: db.Sequelize.TEXT,
        allowNull: false,
    },
    condicao_de_saude: {
        type: db.Sequelize.TEXT,
        allowNull: false,
    },
    necessdades_especificas: {
        type: db.Sequelize.TEXT,
        allowNull: false,
    }
})

Cuidador.sync({force: true})
Idoso.sync({force: true})
Responsavel.sync({force: true})

