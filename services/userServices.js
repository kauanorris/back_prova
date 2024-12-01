// ./services/userService.js
const auth = require('../auth');
const bcrypt = require('bcrypt');
var round_salts = 10;

const db = require('../models');

class UserService{
    constructor(UserModel){
        this.User = UserModel;
    }

    async create(email, data_nasc,password){
        try{
            const hasshpassword = await bcrypt.hash(password, parseInt(round_salts));
            const newUser = await this.User.create({
                email:email,
                data_nasc:data_nasc,
                password:hasshpassword
            });
            return newUser? newUser :null
        }
        catch (error){
            throw error;
        }
    }

    //Método para retornar todos os usuarios 
    async findAll(){    
        try{
            const AllUsers = await this.User.findAll();
            return AllUsers? AllUsers : null;
        }
        catch(error){
            throw error;
        }
    }

    // Método para retornar o usuário pela ID
    async findById(id){
        try{
            const User = await this.User.findByPk(id);
            return User? User: null;
        }
        catch(error){
            throw error;
        }

    }

    async login(email, password) {
        try {
          const user = await this.User.findOne({ where: { email } });
          if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (isPasswordValid) {
              // Gerar o token do usuário
              const token = await auth.generateToken(user); 
              user.dataValues.token = token;
              user.dataValues.password = '';
              return {
                        user: User,
                        token: token
                    };
            } else {
              return null;
            }
          }
          return null;
        } catch (error) {
          throw error;
        }
      } 
    
}

module.exports = UserService;