

const mongoose = require('mongoose');
const News = require('./news.mongo');
const newsMongo = require('./news.mongo');


async function getNews() {
    return await News.find({})
}

async function createNews(newsData) {
    try {
        await News.create(
            {title: newsData.title,
            subTitle: newsData.subTitle,
            content: newsData.content,
            LastModified: new Date(),
            imageUrl: newsData.imageUrl,
            priority: newsData.priority,
            category: newsData.category
        })
        return 'News saved successfully'
    } catch(err) {
        console.error(`Failed to save news: ${err}`)
    }
}

async function updateNews(newsData) {
    try {
        await News.updateOne({
            _id: newsData._id
        }, newsData, {
            upsert: true
        })
        return 'News updated successfully'
    } catch(err) {
        console.error(`Failed to update news: ${err}`)
    }
}

async function getCategoryNews(category) {
    try {
        return await News.find({
            category: category
        })
       
    } catch(err) {
        console.error(`Failed to fetch news: ${err}`)
    }
}

async function deleteNews(deleteData) {
    try {
        await News.deleteOne({
            _id: deleteData._id
        })
        return "News successfully deleted"
    } catch(err) {
        console.error('Error in deleting news:', err)
    }
}

module.exports = {
    getNews,
    createNews,
    deleteNews,
    getCategoryNews,
    updateNews
}
