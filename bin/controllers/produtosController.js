
class ProdutosController {
    constructor(ProdutosService) {
      this.produtosService = ProdutosService;
    }
  
    async createProduto(req, res) {
      const produtoData = req.body; 
      try {
        const newProduto = await this.produtosService.create(produtoData);
        res.status(201).json(newProduto); 
      } catch (error) {
        res.status(500).json({ error: 'Ocorreu um erro ao criar o produto.' }); 
      }
    }
  
    async findAllProdutos(req, res) {
      try {
        const allProdutos = await this.produtosService.findAll();
        res.status(200).json(allProdutos); 
      } catch (error) {
        res.status(500).json({ error: 'Ocorreu um erro ao localizar os produtos.' }); 
      }
    }
  
    async findProdutoById(req, res) {
      const { id } = req.params; 
      try {
        const produto = await this.produtosService.findById(id);
        if (!produto) {
          return res.status(404).json({ error: 'Produto não encontrado.' }); 
        }
        res.status(200).json(produto); 
      } catch (error) {
        res.status(500).json({ error: 'Ocorreu um erro ao localizar o produto pelo ID.' }); 
      }
    }
  
    async updateProduto(req, res) {
      const { id } = req.params; 
      const produtoData = req.body; 
      try {
        const updatedProduto = await this.produtosService.update(id, produtoData);
        res.status(200).json(updatedProduto); 
      } catch (error) {
        res.status(500).json({ error: 'Ocorreu um erro ao atualizar o produto.' }); 
      }
    }
  
    async deleteProduto(req, res) {
      const { id } = req.params; 
      try {
        const message = await this.produtosService.delete(id);
        res.status(200).json(message); 
      } catch (error) {
        res.status(500).json({ error: 'Ocorreu um erro ao deletar o produto.' }); 
      }
    }
  }
  
  module.exports = ProdutosController;