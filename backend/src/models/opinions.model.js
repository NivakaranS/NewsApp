
const Opinion = require('./opinions.mongo');

async function getAllOpinions() {
    return await Opinion.find({})
}

async function createOpinion(opinionData) {
    try {
        await Opinion.create({
            title: opinionData.title,
            content: opinionData.content,
            imageUrl: opinionData.imageUrl,
            priority: opinionData.priority,
            category: opinionData.category,
            LastModified: new Date()
        })
        return 'Opinion saved successfully'
    } catch(err) {
        console.error(`Failed to save opinion: ${err}`)
    }
}

module.exports = {
    getAllOpinions,
    createOpinion
}