
const { getAllNewsCategories, createNewsCategory} = require('../../models/newsCategory.model')

async function httpGetAllNewsCategories(req, res) {
    try {
        return res.status(200).json(await getAllNewsCategories())
    } catch(err) {
        console.error("Error in getting News Categories", err)
    }
}

async function httpCreateNewsCategory(data) {
    try {
        const newsCategory = await createNewsCategory(data);
        return newsCategory;
    } catch (err) {
        console.error("Error in creating News Category", err);
        
    }
}

module.exports = {
    httpGetAllNewsCategories,
    httpCreateNewsCategory
}