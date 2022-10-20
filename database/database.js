const Sequelize = require("sequelize");

const connection = new Sequelize('GUIAPRESS','root','',{
    host: 'localhost',  //localhost
    dialect: 'mssql',
    logging: false,
    timezone: "-03:00" // gravar o horario de criação e update com base na time_zone(google)
});

module.exports = connection;