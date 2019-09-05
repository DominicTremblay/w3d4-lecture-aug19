const express = require('express');
const port = process.env.PORT || 3001;
const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');
const app = express();

app.use('/', usersRoutes);
app.use('/api/1.0/posts/', postsRoutes);

app.get('/', (req, res) => {
  res.send('Homepage of our API');
});

app.listen(port, () => {
  console.log(`Server is listening to ${port}`);
});
