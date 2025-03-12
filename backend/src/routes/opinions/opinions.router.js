

const { httpGetAllOpinions, httpCreateOpinion } = require('./opinions.controller')
const express = require('express');

const opinionsRouter = express.Router();

opinionsRouter.get('/', httpGetAllOpinions)
opinionsRouter.post('/create', httpCreateOpinion)

module.exports = opinionsRouter