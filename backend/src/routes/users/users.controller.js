

const {getAllUsers, createUser, updateUser, getNumberOfUsers, login} = require('../../models/users.model')

async function httpGetAllUsers(req, res) {
    return res.status(200).json(await getAllUsers())
}

async function httpCreateUser(req, res) {
    
    return res.status(201).send(await createUser(req.body))
}

async function httpUpdateUser(req, res) {
    await updateUser(req.body)
    return res.status(200).send('User updated successfully!')
}

async function httpGetNumberOfUsers(req, res) {
    
    return res.status(200).json( await getNumberOfUsers())
}

async function httpLogin(req, res) {
    
    return res.status(200).json(await login(req.body))
}


module.exports = {
    httpGetAllUsers,
    httpCreateUser,
    httpUpdateUser,
    httpGetNumberOfUsers,
    httpLogin
}