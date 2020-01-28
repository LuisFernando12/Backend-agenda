const mysql = require('../database/index').pool;
const md5 = require('js-md5');

module.exports = {
    async index (req, res){
        const {email, senha, nome, celular, telefone, foto = null} = req.body ; 
        let user = await email;
        let password = await senha; 
        password = md5(password);
             mysql.query(`Insert into tbl_usuario (nome, email, senha, celular, telefone, foto) values(?, ?, ?, ?, ?, ?)`, [String(nome), String(user), String(password), String(celular), String(telefone), String(foto)], (err, result, row )=>{
                 if (err) throw err ; 
                 if(result && res.statusCode === 200){
                     return res.json({"mensagem": "cadastro feito com sucesso"});
                 }
             });            
    },
    async store(req, res){
        const {email, senha} = req.body ; 
        let user = await email;
        let password = await senha; 
        password = md5(password);
          
        mysql.query('select id_usuario, nome, email, foto from tbl_usuario where email = ? and senha = ?',[String(user), String(password)],(err, result, row) =>{
                if (err){
                    return res.json(err)
                }if(result){
                    return res.json(result);
                }
        });
    },
        async show(req, res){
        mysql.query('select * from tbl_usuario', (err, result) => {
                if (err) throw err;
                if (result) {
                    return res.json(result);
                }
            });
    }
}