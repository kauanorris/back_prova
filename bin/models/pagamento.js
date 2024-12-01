const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const Pagamento = sequelize.define('Pagamento', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    valorTotal: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    metodoPagamento: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isIn: [['cartao de credito', 'PIX']],
      },
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'pendente',
    },
  }, {
    timestamps: true,
  });

  return Pagamento;
};
