const express = require('express');
const router = express.Router();
const postsDb = require('../db/postsDb');

router.get('/', (req, res) => {
  // form for register
  res.json(postsDb);
});

router.post('/', (req, res) => {
  // add a new user to the db
  res.send('creating a new post');
});

router.get('/:id', (req, res) => {
  res.send('looking at one post');
});

module.exports = router;
