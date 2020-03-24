const mongoose = require('mongoose');

module.exports = new mongoose.Model('book', new mongoose.Schema({
  title: String,
  authors: [{
    type: 'String'
  }],
  description: String,
  image: String,
  link: String
}));