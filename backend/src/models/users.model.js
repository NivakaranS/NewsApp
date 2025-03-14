
const { get } = require('mongoose')
const users = require('./users.mongo')





async function getNumberOfUsers() {
    console.log('Total users: ',(await getAllUsers()).length)
}

async function getAllUsers() {
    return await users.find({})
}

async function createUser(data) {
    await users.create({
        firstName: data.firstName,
        lastName: data.lastName,
        dob: data.dob,
        phoneNumber: data.phoneNumber,
        email: data.email,
        password: data.password,
        gender: data.gender,
        type: data.type
    })
    return users.findOne({
        email: data.email
    })
}

async function updateUser(data) {
    try {
        await users.updateOne({
            userId: data.userId
        }, data, {
            upsert: true
        })
        return 'User updated successfully'
    } catch(err) {
        console.error(`Failed to update user: ${err}`)
    }
}

async function login(data) {
    try {
        const user = await users.findOne({
            email: data.email,
            password: data.password
        })
        if (!user) {
            return 'User not found'
        }
        return user
    } catch(err) {
        console.error(`Failed to login user: ${err}`)
    }
}

module.exports = {
    getAllUsers,
    createUser,
    login,
    updateUser,
    getNumberOfUsers,
}