
const {getStock, addStock} = require('../../models/stock.model');


const httpGetAllStocks = async (req, res) => {
    return res.status(200).json(await getStock())
}

const httpCreateStock = async(req, res) => {
    return res.status(200).json(await addStock(req.body))
}

module.exports = {
    httpGetAllStocks,
    httpCreateStock
}