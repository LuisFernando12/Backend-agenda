const mysql = require('../database/index').pool;

module.exports = {

    async index (req, res){
        const {titulo, descricao, data_tarefa} = req.body ; 
        const {id_usuario} = req.params;
             mysql.query(`Insert into tbl_tarefas (titulo, descricao, data, id_usuario) values( ?, ?, ?, ?)`, [ String(titulo), String(descricao), data_tarefa, id_usuario], (err, result, row )=>{
                 if (err) throw err ; 
                 if(result && res.statusCode === 200){
                     return res.json({"mensagem": "cadastro feito com sucesso"});
                 }
             });            
    },

    async show(req, res){
        const {id_usuario} = req.params; 
        let user_id = await id_usuario;
        mysql.query(`select * from tbl_tarefas where id_usuario = ${user_id}`,(err, result, row) =>{
                if (err){
                 return res.json(err);
                }if(result){
                    return res.json(result);
                }
        });
    },

        async showOne(req, res){
        const {id_usuario, id_tarefa} = req.params ; 
        let user_id = await id_usuario;
        let tarefa_id = await id_tarefa;

        mysql.query(`select * from tbl_tarefas where id_usuario =${user_id} and id_tarefa =${tarefa_id} `, (err, result) => {
                if (err) {
                    return res.json(err);
                }
                if (result) {
                    return res.json(result);
                }
            });
    }
}