
const mongoose = require('mongoose')

const StockSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    subTitle: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true,
        unique: true
    },
    updatedTime: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Stocks', StockSchema)