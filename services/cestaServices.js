
const { Cesta } = require('../models'); 

class CestaService {
    constructor() {

    }

    async addProduct(productData) {
        try {
            const newProduct = await Cesta.create(productData);
            return newProduct; 
        } catch (error) {
            throw new Error(`Erro ao adicionar produto: ${error.message}`);
        }
    }

    async viewCesta() {
        try {
            const products = await Cesta.findAll();
            return products;
        } catch (error) {
            throw new Error(`Erro ao visualizar a cesta: ${error.message}`);
        }
    }

    async updateProduct(id, updateData) {
        try {
            const product = await Cesta.findByPk(id);
            if (!product) {
                throw new Error('Produto não encontrado');
            }

            await Cesta.update(updateData, {
                where: { id: id }
            });

            return await this.viewCesta();
        } catch (error) {
            throw new Error(`Erro ao atualizar produto: ${error.message}`);
        }
    }

    async deleteProduct(id) {
        try {

            const product = await Cesta.findByPk(id);
            if (!product) {
                throw new Error('Produto não encontrado');
            }

            await Cesta.destroy({
                where: { id: id }
            });

            return { message: "Produto removido com sucesso!" };
        } catch (error) {
            throw new Error(`Erro ao remover produto: ${error.message}`);
        }
    }

    async findProductById(id) {
        try {
            const product = await Cesta.findByPk(id);
            if (!product) {
                throw new Error('Produto não encontrado');
            }
            return product;
        } catch (error) {
            throw new Error(`Erro ao buscar produto: ${error.message}`);
        }
    }
}

module.exports = CestaService;
