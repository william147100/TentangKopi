const express = require('express');
const router = express.Router();
const path = require('path');

const userSchema = require('../../schema/user');


router.post('/register', async function (req, res) {
    var newUser = new userSchema({
        email: req.body.email,
        password: req.body.password
    });
    await newUser.save();
    console.log('data saved');
});
router.get('/register', function (req, res) {
    res.sendFile(path.join(__dirname + '/../../Login/signup.html'));
});

router.post('/login', async function (req, res) {
    const {
        email,
        password
    } = req.body;
    try {
        const user = await userSchema.findOne({
            email
        });
        if (!user)
            return res.status(400).json({
                message: "no pass"
            });

        const usrPassword = await userSchema.findOne({
            password
        });
        if (!usrPassword)
            return console.log('wrong password');

        res.redirect('/');
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
});
router.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/../../Login/signin.html'));
})
module.exports = router;