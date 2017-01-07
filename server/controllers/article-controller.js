var Article = require('../models/article');

module.exports.create = function (req, res) {
  var article = new Article(req.body);
  
  article.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Article.find({}, function (err, results) {
    res.json(results);
  });
}