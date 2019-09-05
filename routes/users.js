const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
  // form for register
  res.send('register form');
});

router.post('/users', (req, res) => {
  // add a new user to the db
  res.send('creating user');
});

module.exports = router;
