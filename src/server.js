const express = require('express');
const morgan = require('morgan');

const { UserModel } = require('./models/User.model');
const connectDb = require('./connection');

const app = express();

const PORT = process.env.PORT || 7070;

app.use(morgan('common'));

app.get('/', async (req, res) => {
  res.json(await UserModel.find());
});

app.get('/users', (req, res) => {
  res.send('get users');
});

app.get('/user-create', async (req, res) => {
  const user = new UserModel({ username: 'Tyler', md5: 'hlalisfudhalsdiul' });
  await user.save().then(() => console.log('[✔] User Created'));

  res.end('done');
});

app.listen(PORT, () => {
  connectDb();
  console.log('server up...');
});
