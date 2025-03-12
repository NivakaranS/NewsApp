
const Stocks = require('./stock.mongo')

async function getStock() {
    return Stocks.find({})
}

async function addStock(data) {
    await Stocks.create({
        title: data.title,
        subTitle: data.subTitle,
        price: data.price,
        priority: data.priority,
        updatedTime: new Date()

    })
    return 'Stock saved successfully'
}

module.exports = {
    getStock,
    addStock
}