const express = require('express');
const router = express.Router();
const pagamentoController = require('../controllers/pagamentoController');

router.post('/payment/credit-card', pagamentoController.processCreditCard);

router.post('/pagamento/pix', pagamentoController.processPix);

router.get('/pagamento/status/:pagamentoId', pagamentoController.checkPagamentoStatus);

module.exports = router;
