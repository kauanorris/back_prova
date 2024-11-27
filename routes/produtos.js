const express = require('express');
const router = express.Router();
const ProdutosServices = require('../services/produtosServices');
const db = require('../models');
const produtosServices = new ProdutosServices(db.Produtos);

router.post('/', async (req, res) => {
  try {
    const { nome, descricao, preco, estoque } = req.body;
    const newProduto = await produtosServices.create({ nome, descricao, preco, estoque });
    res.status(201).json(newProduto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o produto' });
  }
});

router.get('/', async (req, res) => {
  try {
    const produtos = await produtosServices.findAll();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar os produtos' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { nome, descricao, preco, estoque } = req.body;
    const updatedProduto = await produtosServices.update(id, { nome, descricao, preco, estoque });
    res.status(200).json(updatedProduto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o produto' });
  }
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await produtosServices.delete(id);
    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar o produto' });
  }
});

module.exports = router;
