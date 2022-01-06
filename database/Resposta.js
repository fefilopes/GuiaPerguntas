const { Sequelize } = require("sequelize");
const Seguelize = require("sequelize");
const connection = require("./database");

const Resposta = connection.define("respostas", {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Seguelize.INTEGER,
        allowNull: false
    }
});

Resposta.sync({force: false});

module.exports = Resposta;