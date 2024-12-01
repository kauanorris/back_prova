const Sequelize = require('sequelize');

const sequelize = new Sequelize('ecommerce_db', 'root', 'sqx105019', {
  host: 'localhost',
  dialect: 'mysql' 
});

module.exports = sequelize;
