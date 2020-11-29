const express = require('express');
const router = express.Router();
const path = require('path');
const userSchema = require('../../schema/user');


router.post('/', async function (req, res) {
    var newUser = new userSchema({
        email: req.body.email,
        password: req.body.password
    });
    await newUser.save();
});
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../../Login/signin.html'));
});

module.exports = router;