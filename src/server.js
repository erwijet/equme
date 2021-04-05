require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const api = require('./api/api');

const app = express();

const PORT = process.env.PORT || 7070;

app.use(morgan('common'));
app.use('/api', api);

app.get('/', async (req, res) => {
  res.end('hello, world!');
});

app.listen(PORT, () => {
  console.log('server up...');
});
