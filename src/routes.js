const express = require('express');

const ControllerUsuario = require('./controller/ControllerUsuario');
const ControllerContatos = require('./controller/ControllerContatos');
const ControllerTarefas = require('./controller/ControllerTarefas');
const routes = express.Router();


routes.get('/usuario/all', ControllerUsuario.show);
routes.post('/usuario', ControllerUsuario.store);
routes.post('/usuario/cadastrar', ControllerUsuario.index);


routes.get('/usuario/contato/one/:id_usuario/:id_contato', ControllerContatos.showOne);
routes.get('/usuario/contato/:id_usuario', ControllerContatos.show);
routes.post('/usuario/contato/cadastrar/:id_usuario', ControllerContatos.index);

routes.get('/usuario/tarefa/one/:id_usuario/:id_tarefa', ControllerTarefas.showOne);
routes.get('/usuario/tarefa/:id_usuario', ControllerTarefas.show);
routes.post('/usuario/tarefa/cadastrar/:id_usuario', ControllerTarefas.index);



module.exports = routes ;