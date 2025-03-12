
const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }, dob : {
        type: Date,
        required: true
    }, gender: {
        type: String,
        required: true
    }, type: {
        type: String,
        required: true
    }
})

// This connects the usersSchema with the "users" collection
// The mongodb collections should always be pleural nouns
// This model will help to create and read models from the launches collection
module.exports = mongoose.model('User', usersSchema)