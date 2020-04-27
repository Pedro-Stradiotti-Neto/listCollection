const express = require('express');
const UserController = require('./controllers/UsersController');
const BooksController = require('./controllers/BooksController');
const SessionController = require('./controllers/SessionController');
const BDetailController = require('./controllers/BDetailController');
const routes = express.Router();

//Rota Login
routes.post('/session', SessionController.create);

//Rota de Listagem de Usuários
routes.get('/users', UserController.index);

//Rota Cadastro Novo Usuário (Visual)
routes.post('/users', UserController.create);

//Rota Apagar Usuário
routes.delete('/users', UserController.delete);

//Rota Atualizar Dados Cadastrais


// ------------  Parte Interna  ---------------

//Rota Listagem Obras
routes.get('/books', BooksController.index);

//Rota Cadastrar Nova Obra
routes.post('/books', BooksController.create);

//Rota Apagar Obra
routes.delete('/books/:id', BooksController.delete);

//Rota Listagem Obras Específicas
routes.get('/booksDetail', BDetailController.index);

//Rota Cadastrar Novo Volume

//Rota Apagar Volume

module.exports = routes;