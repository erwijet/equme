const mongoose = require('mongoose');
const User = require('./models/User.model');

const connection = `mongodb://mongo:27017/equme`;

function connectDb() {
  return mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = connectDb;
