

const mongoose = require('mongoose')

const NewsCategorySchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('NewsCategories', NewsCategorySchema);
