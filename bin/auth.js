// auth.js json
const jwt = require('jsonwebtoken');
const secret = '123'; //Ponto de vulnerabilidade porque a chave secreta não acessivel
//Recomenda-se gravar em variaveis de ambiente do sistema operacional 

//Metodo para gerar o token jwt
async function generateToken(user){
    const id = user.id;
    const email = user.email;
    const token = jwt.sign({id,email},secret, {expiresIn:'1h'});
    return token;
}

//metodo para verificar a validade do token jwt
async function verifyToken(req, res, next){
    //Extrait o cabeçalho (header) que contem o token jwt
    const authheader = req.headers['authorization'];
    if(!authheader){
        return res.status(401).json({message:'token não informado'});
    }
    //Extrair o token jwt
    const token = authheader.split(' ')[1]; 
    if(!token){
        return res.status(401).json({messge:'Token não informado'});
    
    }
    jwt.verify(token, secret,(err, decoded)=>{
        if(err){
            //Caso ocorra erro
            return res.status(401).json({Message:'Token invalido'});
        }
        req.user = decoded;
        next();
    });
}

module.exports = {generateToken, verifyToken} ;