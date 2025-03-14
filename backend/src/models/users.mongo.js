
const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }, dob : {
        type: String,
        required: true
    }, phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }, type: {
        type: String,
        required: true
    }, lastUpdated: {
        type: Date,
        default: Date.now()
    }
})

// This connects the usersSchema with the "users" collection
// The mongodb collections should always be pleural nouns
// This model will help to create and read models from the launches collection
module.exports = mongoose.model('User', usersSchema)