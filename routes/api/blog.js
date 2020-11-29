const express = require('express');
const router = express.Router();
const path = require('path');

const blogSchema = require('../../schema/blog');

router.get('/dashboard', function (req, res) {
    res.sendFile(path.join(__dirname + '/../../Homepage/dashboard/dashboard.html'))
});

module.exports = router;