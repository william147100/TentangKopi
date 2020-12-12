const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')



const login = require('./routes/api/user');
const blogs = require('./routes/api/blog');

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

app.use('/', blogs)
app.use('/', login);
app.use('/', router);

app.use(express.static(path.join(__dirname, "./dist")))
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist', 'index.html'))
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});