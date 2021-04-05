const express = require('express');
const connectDB = require('./connection');

// import api routes
const userApi = require('./user.api');

const api = express.Router();

// connect to database
api.use((req, res, next) => {
  connectDB();
  next();
});

api.use('/user', userApi);

api.get('/', (req, res) => res.end('API Running :)'));

module.exports = api;
