
const express = require('express')

const { httpGetAllStocks, httpCreateStock} = require('./stocks.controller')

const stocksRouter = express.Router()

stocksRouter.get('/', httpGetAllStocks)
stocksRouter.post('/create', httpCreateStock)

module.exports = stocksRouter
