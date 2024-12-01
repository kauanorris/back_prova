const express = require('express');
const router = express.Router();
const CestaController = require('../controllers/cestaController');

const cestaController = new CestaController();

router.post('/', cestaController.addProduct.bind(cestaController));

router.get('/:userId', cestaController.viewCesta.bind(cestaController));

router.delete('/:productId', cestaController.removeProduct.bind(cestaController));

router.delete('/', cestaController.clearCesta.bind(cestaController));

router.put('/:productId', cestaController.updateProductQuantity.bind(cestaController));

module.exports = router;
