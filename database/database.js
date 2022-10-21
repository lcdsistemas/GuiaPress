const Sequelize = require("sequelize");

const connection = new Sequelize('banco','root','',{
    host: 'localhost',  //localhost
    dialect: 'myssql',  // mssql
    logging: false,
    timezone: "-03:00" // gravar o horario de criação e update com base na time_zone(google)
});

module.exports = connection;