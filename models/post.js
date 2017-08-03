const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: String,
  email: {
    type: String,
    required: true
  },
  img: {
    data: Buffer,
    contentType: String
  },
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Post', postSchema);
