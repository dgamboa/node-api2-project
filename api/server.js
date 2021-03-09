// implement your server here
// require your posts router and connect it here
const express = require('express');
const postsRouter = require('./posts/posts-router');

const server = express();

server.use(express.json());

server.use('/api/posts', postsRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>Blog Posts API</h2>
    <p>This is a simple API for blog posts built for assignment 4.1.2</p>
  `);
});

module.exports = server;
