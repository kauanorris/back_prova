const Sequelize = require('sequelize');
const sequelize = require('../config/database'); 

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,  
    },
    email: {
      type: Sequelize.STRING,
      unique: true,  
      allowNull: false,  
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,  
    },
    dataNascimento: {
      type: Sequelize.DATE,
      allowNull: true,  
    }
  }, {
    timestamps: true,  
    tableName: 'users',  
  });

  return User;
};
