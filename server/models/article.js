var mongoose = require('mongoose');

module.exports = mongoose.model('Article', {
  title: String,
  url: String,
  rating: { type: Number, min: 0, max: 5 }
});