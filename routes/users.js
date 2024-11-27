var express = require('express');
var router = express.Router();
const auth = require('../auth');

//Implementar as dependencia para o fucionamento da classe User
const db =require('../models') //caregando banco de dados

//Carregando as classes service e controller da user 
const UserService = require('../services/userServices');
const UserController = require('../controllers/userController');

//Construir os objetos a partir das classes
const userService = new UserService(db.User);
const userController = new UserController(userService);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Módulo de usuários rodando.');
});

//Rota para login
router.post('/login', async(req, res)=>{
  userController.login(req,res);
});

//Rota para registrar novo usuário  
router.post('/novouser', async(req,res)=>{
  userController.createUser(req,res);
});

//Rota para retornar todos os usuarios
router.get('/allusers', auth.verifyToken, async(req,res)=>{
  userController.findAllUsers(req,res);
});

//Rota para retornar um usuario pelo id 
router.get('/getUserById', async (req,res)=>{
  userController.findUserById(req,res);
});


module.exports = router;