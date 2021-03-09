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

router.post('/', async (req, res) => {
  try {
    if (!req.body.title || !req.body.contents) {
      res.status(400).json({ message: "Please provide title and contents for the post" });
    } else {
      const newPost = {title: req.body.title, contents: req.body.contents};
      const insertedPostId = await Posts.insert(newPost);
      const insertedPost = await Posts.findById(insertedPostId.id);
      res.status(201).json(insertedPost);
    }
  } catch (err) {
    res.status(500).json({ message: "There was an error while saving the post to the database" });
  }
});

// router.get('/:id', async (req, res) => {
//   try {

//   } catch (err) {
//     res.status(500).json({ message: "The posts information could not be retrieved" });
//   }
// });

module.exports = router;