const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','621071',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;