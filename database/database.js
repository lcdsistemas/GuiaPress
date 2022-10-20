const Sequelize = require("sequelize");

const connection = new Sequelize('GuiaPress','root','',{
    host: 'localhost',  //localhost
    dialect: 'mysql',
    logging: false,
    timezone: "-03:00" // gravar o horario de criação e update com base na time_zone(google)
});

module.exports = connection;