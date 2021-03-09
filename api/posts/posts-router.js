// implement your posts router here
const express = require('express');

const router = express.Router();

const Posts = require('./posts-model');

router.get('/', async (req, res) => {
  try {
    const posts = await Posts.find();
    res.status(200).json(posts);
  } catch(err) {
    res.status(500).json({ message: "Error retrieving posts" });
  }
});

module.exports = router;