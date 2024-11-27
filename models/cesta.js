const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const Cesta = sequelize.define('Cesta', {
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
    preco: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    quantidade: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'pendente',
    },
  }, {
    timestamps: true, 
  });

  return Cesta;
};
