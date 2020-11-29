const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const mongoose = require('mongoose');

const login = require('./routes/api/user');

mongoUri = 'mongodb+srv://admin:tentangkopi@cluster0.razyx.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => console.log('Connected to Mongodb'));

app.use(express.static(path.join(__dirname, "/Homepage")));
app.use(express.static(path.join(__dirname, "/Image")));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/Homepage/Website Ilmu Kopi.html'));
});
app.use(express.static(path.join(__dirname, "Login")));

app.use(express.urlencoded());
app.use(express.json());



app.use('/signin', login);
app.use('/', router);
app.listen(8080);

console.log('Runing at port 8080');