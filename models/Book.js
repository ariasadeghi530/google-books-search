const mongoose = require('mongoose');

module.exports = new mongoose.model('book', new mongoose.Schema({
  title: String,
  authors: [{
    type: 'String'
  }],
  description: String,
  imageLinks: Object,
  infoLink: String
}));