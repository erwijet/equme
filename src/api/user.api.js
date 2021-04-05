const express = require('express');
const userApi = express.Router();

userApi.get('/', (req, res) => {
  res.end('user api');
});

module.exports = userApi;
