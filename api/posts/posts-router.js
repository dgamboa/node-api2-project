// implement your posts router here
const express = require('express');

const router = express.Router();

const Posts = require('./posts-model');

router.get('/', async (req, res) => {
  try {
    const posts = await Posts.find();
    res.status(200).json(posts);
  } catch(err) {
    res.status(500).json({ message: "The posts information could not be retrieved" });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id)
    post
      ? res.status(200).json(post)
      : res.status(404).json({ message: "The post with the specified ID does not exist" })
  } catch (err) {
    res.status(500).json({ message: "The posts information could not be retrieved" });
  }
});

// router.get('/:id', async (req, res) => {
//   try {

//   } catch (err) {
//     res.status(500).json({ message: "The posts information could not be retrieved" });
//   }
// });

module.exports = router;