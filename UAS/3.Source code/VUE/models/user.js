const mongoose = require('mongoose');

const userdata = mongoose.model('userdata', new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}));

module.exports = userdata;