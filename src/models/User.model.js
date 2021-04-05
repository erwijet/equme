const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  md5: { type: String },
});

const UserModel = mongoose.model('User', userSchema);

module.exports = { userSchema, UserModel };
