
const { get } = require('mongoose')
const users = require('./users.mongo')


async function adduser(data) {
    await users.create(data)
}


async function saveUser(user) {
    try {
        await users.updateOne({
            userId: user.userId
        }, {
            userId: user.userId,
        }, {
            upsert: true
        })
    } catch(err) {
        console.error(`Failed to save user: ${err}`)
    }
    
}

async function getNumberOfUsers() {
    console.log('Total users: ',(await getAllUsers()).length)
}

async function getAllUsers() {
    return await users.find({})
}

async function createUser(data) {
    await users.create({
        userId: data.userId,
        firstName: data.firstName,
        lastName: data.lastName,
        dob: data.dob,
        gender: data.gender,
        type: data.type
    })
}


module.exports = {
    getAllUsers,
    createUser,
    saveUser,
    getNumberOfUsers,
}