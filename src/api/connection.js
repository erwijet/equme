const mongoose = require('mongoose');
const User = require('../models/User.model');

const connection = ``;

function connectDb() {
  if (mongoose.connection != null) return;

  return mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = connectDb;
