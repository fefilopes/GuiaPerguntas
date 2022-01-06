const { Sequelize } = require("sequelize");
const Seguelize = require("sequelize");
const connection = require("./database");

const Pergunta = connection.define('perguntas',{
    titulo:{
        type: Seguelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Pergunta.sync({force: false}).then(() => {});

module.exports = Pergunta;