

const express  = require('express');

const {httpGetAllUsers, httpCreateUser, httpLogin, httpGetNumberOfUsers, httpUpdateUser } = require('./users.controller');

const usersRouter = express.Router();

usersRouter.get('/', httpGetAllUsers);
usersRouter.post('/create', httpCreateUser);
usersRouter.get('/count', httpGetNumberOfUsers);
usersRouter.post('/update', httpUpdateUser);
usersRouter.post('/login', httpLogin);

module.exports = usersRouter;