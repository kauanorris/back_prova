const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const Produtos = sequelize.define('Produtos', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false, 
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: true, 
    },
    preco: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    estoque: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: true, 
  });

  return Produtos;
};
