const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');

const login = require('./routes/api/user');
//const dashboard = require('./routes/api/blog');

mongoUri = 'mongodb+srv://admin:tentangkopi@cluster0.razyx.mongodb.net/tentang_kopi?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => console.log('Connected to Mongodb'));

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

//app.use('/', dashboard);
app.use('/', login);
app.use('/', router);
app.listen(8081);

console.log('Runing at port 8081');