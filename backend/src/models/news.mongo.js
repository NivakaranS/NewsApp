

const mongoose = require('mongoose')

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    subTitle: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }, 
    LastModified: {
        type: Date,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true,
       
    }, 
    category: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('News', NewsSchema)
