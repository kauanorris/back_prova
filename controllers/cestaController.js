const CestaService = require('../services/cestaServices'); 
const db = require('../models'); 

class CestaController {
    constructor() {
        this.cestaService = new CestaService(db.Cesta); 
    }

    async addProduct(req, res) {
        const productData = req.body; 
        try {
            const newProduct = await this.cestaService.addProduct(productData);
            res.status(201).json(newProduct); 
        } catch (error) {
            res.status(500).json({ error: 'Erro ao adicionar o produto à cesta.'}); 
        }
    }

    async viewCesta(req, res) {
        const userId = req.params.userId; 
        try {
            const products = await this.cestaService.viewCesta(userId);
            res.status(200).json(products); 
        } catch (error) {
            res.status(500).json({ error: 'Erro ao visualizar a cesta.'}); 
        }
    }

    async removeProduct(req, res) {
        const { productId } = req.params; 
        const userId = req.body.userId; 
        try {
            const result = await this.cestaService.removeProduct(productId, userId);
            res.status(200).json(result); 
        } catch (error) {
            res.status(500).json({ error: 'Erro ao remover o produto da cesta.'}); 
        }
    }

    async clearCesta(req, res) {
        const userId = req.body.userId; 
        try {
            const result = await this.cestaService.clearCesta(userId);
            res.status(200).json(result); 
        } catch (error) {
            res.status(500).json({ error: 'Erro ao limpar a cesta.'}); 
        }
    }

    async updateProductQuantity(req, res) {
        const { productId } = req.params; 
        const userId = req.body.userId; 
        const { quantidade } = req.body; 
        try {
            const updatedProduct = await this.cestaService.updateProductQuantity(productId, userId, quantidade);
            res.status(200).json(updatedProduct); 
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar a quantidade do produto.'}); 
        }
    }
}

module.exports = CestaController;
