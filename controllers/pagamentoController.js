const { Pagamento } = require('../models');

const pagamentoController = {
  
  processCreditCard: async (req, res) => {
    const { userId, valorTotal } = req.body;

    try {    
      const pagamento = await Pagamento.create({
        userId,
        valorTotal,
        metodoPagamento: 'cartão de crédito',
        status: 'concluído' 
      });

      res.status(201).json(pagamento);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  processPix: async (req, res) => {
    const { userId, valorTotal } = req.body;

    try {

      const pagamento = await Pagamento.create({
        userId,
        valorTotal,
        metodoPagamento: 'PIX',
        status: 'concluído' 
      });

      res.status(201).json(pagamento);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  checkPagamentoStatus: async (req, res) => {
    const { pagamentoId } = req.params;

    try {
      const pagamento = await Pagamento.findByPk(pagamentoId);

      if (!pagamento) {
        return res.status(404).json({ error: 'Pagamento not found' });
      }

      res.status(200).json(pagamento);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = pagamentoController;
