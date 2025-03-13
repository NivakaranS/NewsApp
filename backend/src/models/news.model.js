

const mongoose = require('mongoose');
const News = require('./news.mongo');
const newsMongo = require('./news.mongo');


async function getNews() {
    return await News.find({})
}

async function createNews(newsData) {
    try {
        const lastNews = await News.findOne({}, {}, { sort: {priority: -1}})

        const priority = lastNews ? lastNews.priority + 1 : 1; 

        await News.create(
            {title: newsData.title,
            subTitle: newsData.subTitle,
            content: newsData.content,
            LastModified: new Date(),
            imageUrl: newsData.imageUrl,
            priority: priority,
            category: newsData.category,
            description: newsData.description
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

async function updateManyNews(newsData) {
    try {
        
        const existingPriorities = await News.distinct("priority");

        
        const bulkOps = newsData.map((news, index) => {
            
            let newPriority = index + 1;
            while (existingPriorities.includes(newPriority)) {
                newPriority++; 
            }

            existingPriorities.push(newPriority);

            
            return {
                updateOne: {
                    filter: { _id: news._id },
                    update: { $set: { ...news, priority: newPriority } },
                    upsert: true
                }
            };
        });

        // Step 5: Perform the bulk update operation
        await News.bulkWrite(bulkOps);

        return 'News updated successfully';
    } catch (err) {
        console.error(`Failed to update news: ${err}`);
        throw new Error('Error updating news');
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
    updateNews,
    updateManyNews
}
