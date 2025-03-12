
const {getAllOpinions, createOpinion} = require('../../models/opinions.model')


const httpGetAllOpinions = async (req, res) => {
    return res.status(200).json(await getAllOpinions())
}

const httpCreateOpinion = async(req, res) => {
    return res.status(200).json(await createOpinion(req.body))
}

module.exports = {
    httpGetAllOpinions,
    httpCreateOpinion
}