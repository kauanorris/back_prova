const db = require('../models'); 

class ProdutosService {
  constructor(produtoModel) {
    this.produtoModel = produtoModel;
  }

  async create(produtoData) {
    try {
      const newProduto = await this.produtoModel.create(produtoData);
      return newProduto || null; 
    } catch (error) {
      throw new Error('Erro ao criar produto: ' + error.message); 
    }
  }

  async findAll() {
    try {
 
      const allProdutos = await this.produtoModel.findAll();
      return allProdutos || null; 
    } catch (error) {
      throw new Error('Erro ao buscar produtos: ' + error.message); 
    }
  }

  async findById(id) {
    try {
    
      const produto = await this.produtoModel.findByPk(id);
      return produto || null; 
    } catch (error) {
      throw new Error('Erro ao buscar produto: ' + error.message); 
    }
  }

  async update(id, produtoData) {
    try {
      const produto = await this.findById(id);
      if (!produto) throw new Error('Produto não encontrado');

      const updatedProduto = await produto.update(produtoData);
      return updatedProduto; 
    } catch (error) {
      throw new Error('Erro ao atualizar produto: ' + error.message); 
    }
  }

  async delete(id) {
    try {
      const produto = await this.findById(id);
      if (!produto) throw new Error('Produto não encontrado');

      
      await produto.destroy();
      return { message: 'Produto deletado com sucesso' }; 
    } catch (error) {
      throw new Error('Erro ao deletar produto: ' + error.message); 
    }
  }
}

module.exports = ProdutosService;
