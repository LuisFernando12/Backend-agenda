const mysql = require('../database/index').pool;

module.exports = {

    async index (req, res){
        const {email, nome, celular, telefone, foto = null,} = req.body ; 
        const {id_usuario} = req.params;
             mysql.query(`Insert into tbl_contato (nome, email, celular, telefone, foto, id_usuario) values(?, ?, ?, ?, ?, ?)`, [String(nome), String(email), String(celular), String(telefone), String(foto), id_usuario], (err, result, row )=>{
                 if (err) throw err ; 
                 if(result && res.statusCode === 200){
                     return res.json({"mensagem": "cadastro feito com sucesso"});
                 }
             });            
    },

    async show(req, res){
        const {id_usuario} = req.params; 
        let user_id = await id_usuario;
        mysql.query(`select * from tbl_contato where id_usuario = ${user_id}`,(err, result, row) =>{
                if (err){
                 return res.json(err);
                }if(result){
                    return res.json(result);
                }
        });
    },

        async showOne(req, res){
        const {id_usuario, id_contato} = req.params ; 
        let user_id = await id_usuario;
        let contact_id = await id_contato;

        mysql.query(`select * from tbl_contato where id_usuario =${user_id} and id_contato =${contact_id} `, (err, result) => {
                if (err) {
                    return res.json(err);
                }
                if (result) {
                    return res.json(result);
                }
            });
    }
}