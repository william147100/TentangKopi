const mongoose = require('mongoose');

const usersSchema = mongoose.model('usersSchema', new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}));

exports.usersSchema = usersSchema