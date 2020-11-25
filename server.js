const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(path.join(__dirname, "/Homepage")));
app.use(express.static(path.join(__dirname, "/Image")));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/Homepage/Website Ilmu Kopi.html'));
});
app.use(express.static(path.join(__dirname, "Login")));
app.get('/Login', function (req, res) {
    res.sendFile(path.join(__dirname + '/Login/signin.html'));
});

app.use('/', router);
app.listen(8080);

console.log('Runing at port 8080');