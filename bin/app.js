
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const sequelize = require('./models').sequelize;
const User = require('./models/user')(sequelize);    
const Produtos = require('./models/produtos')(sequelize);
const Cesta = require('./models/cesta')(sequelize); 
const Pagamento = require('./models/pagamento')(sequelize); 

const indexRouter = require('./routes/index');  
const usersRouter = require('./routes/users');  
const produtosRouters = require('./routes/produtos');  
const cestaRouters = require('./routes/cestaRoutes'); 
const pagamentoRouters = require('./routes/pagamentoRoutes'); 

const app = express(); 


app.use(cors({
    origin: 'http://localhost:3001', // Substitua pelo URL do seu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
app.use(logger('dev'));                      
app.use(express.json());                     
app.use(express.urlencoded({ extended: false }));  
app.use(cookieParser());                    
app.use(express.static(path.join(__dirname, 'public')));  

app.use('/', indexRouter);                    
app.use('/users', usersRouter);               
app.use('/produtos', produtosRouters);         
app.use('/cesta', cestaRouters); 
app.use('/pagamento', pagamentoRouters); 

if (process.env.NODE_ENV !== 'production') {
    sequelize.sync({ alter: true }) 
        .then(() => {
            console.log('Banco de dados sincronizado');
        })
        .catch(err => {
            console.error('Erro ao sincronizar o banco de dados:', err);
        });
}

const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;
