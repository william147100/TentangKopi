const mongoose = require('mongoose');

const blogdata = mongoose.model('blogdata', new mongoose.Schema({
    head: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}));

module.exports = blogdata;