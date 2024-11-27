const db = require('../models');

class PagamentoService {
    constructor(pagamentoModel) {
        this.pagamentoModel = pagamentoModel;
    }

    async create(pagamentoData) {
        try {
            const newPagamento = await this.pagamentoModel.create(pagamentoData);
            return newPagamento || null; 
        } catch (error) {
            throw new Error('Erro ao criar pagamento: ' + error.message); 
        }
    }

    async findAll() {
        try {
            const allPagamentos = await this.pagamentoModel.findAll();
            return allPagamentos || null; 
        } catch (error) {
            throw new Error('Erro ao buscar pagamentos: ' + error.message); 
        }
    }

    async findById(id) {
        try {
            const pagamento = await this.pagamentoModel.findByPk(id);
            return pagamento || null; 
        } catch (error) {
            throw new Error('Erro ao buscar pagamento: ' + error.message); 
        }
    }

    async update(id, pagamentoData) {
        try {
            const pagamento = await this.findById(id);
            if (!pagamento) throw new Error('Pagamento não encontrado');

            const updatedPagamento = await pagamento.update(pagamentoData);
            return updatedPagamento; 
        } catch (error) {
            throw new Error('Erro ao atualizar pagamento: ' + error.message); 
        }
    }

    async delete(id) {
        try {
            const pagamento = await this.findById(id);
            if (!pagamento) throw new Error('Pagamento não encontrado');

            await pagamento.destroy();
            return { message: 'Pagamento deletado com sucesso' }; 
        } catch (error) {
            throw new Error('Erro ao deletar pagamento: ' + error.message); 
        }
    }
}

module.exports = PagamentoService;