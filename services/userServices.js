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

    async login(email, password){
        try{
            const User = await this.User.findOne({
                where : {email}
            });
            if(User){
                //preencher depois, porque a senha precisa ser criptografada
                //Gerar o token do user 
                const token = await auth.generateToken(User);
                User.dataValues.Token = token;
                User.dataValues.password = '';
            }
            return User? User:null;
        }
        catch(error){
            throw error;
        }
        //Se o usuario existe, ver se a senha esta ok
        
    }
    
}

module.exports = UserService;