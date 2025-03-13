
const NewsCategories = require('./newsCategory.mongo');

async function getAllNewsCategories() {
    return await NewsCategories.find({});
}

async function createNewsCategory(data) {
    try {
        NewsCategories.create({
            title: data.title,
            imageUrl: data.imageUrl
        })
        return 'News category saved successfully'
    } catch(err) {
        console.error('Error in creating news category', err)
    }
}

module.exports = {
    getAllNewsCategories,
    createNewsCategory
}