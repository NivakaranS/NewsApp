

const {httpGetAllNews, httpCreateNews, httpDeleteNews, httpGetCategoryNews, httpUpdateNews} = require('./news.controller')
const express = require('express');

const newsRouter = express.Router();


newsRouter.get('/', httpGetAllNews)
newsRouter.post('/create', httpCreateNews)
newsRouter.post('/delete', httpDeleteNews )
newsRouter.post('/update', httpUpdateNews)
newsRouter.post('/category', httpGetCategoryNews)

module.exports = newsRouter