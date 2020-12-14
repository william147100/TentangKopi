const express = require('express')
const router = express.Router()

const blogSchema = require('../../models/blog.js')

router.get('/blogs', async function (req, res) {
  blogSchema.find().then((blogSchema) => {
    res.json(blogSchema)
  })
});

router.post('/blogs', async function (req, res) {
  var newBlog = new blogSchema({
    title: req.body.title,
    body: req.body.body
  });
  await newBlog.save();
  console.log('data saved');
});

module.exports = router;