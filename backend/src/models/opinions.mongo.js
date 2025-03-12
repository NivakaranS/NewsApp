
const mongoose = require('mongoose');

const OpinionSchema = new mongoose.Schema({
    title: {
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
        unique: true
    },
    category: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Opinion', OpinionSchema)