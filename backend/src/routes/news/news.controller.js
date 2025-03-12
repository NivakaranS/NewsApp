

const News = require('../../models/news.model');

async function httpGetAllNews(req, res) {
    return res.status(200).json(await News.getNews())
}

async function httpCreateNews(req, res) {
    return res.status(200).json(await News.createNews(req.body))
}

async function httpUpdateNews(req, res) {
    return res.status(200).json(await News.updateNews(req.body))
}

async function httpGetCategoryNews(req, res) {
    return res.status(200).json(await News.getCategoryNews(req.body.category))
}

async function httpDeleteNews(req, res) {
    return res.status(200).json(await News.deleteNews(req.body))
}

module.exports = {
    httpGetAllNews,
    httpCreateNews,
    httpDeleteNews,
    httpUpdateNews,
    httpGetCategoryNews
}