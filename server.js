var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');    
var articleController = require('./server/controllers/article-controller');

const PORT=8080; 

mongoose.connect('mongodb://localhost:27017/lessTalk');

app.use(bodyParser());

// Serve static files
app.use(express.static(path.join(__dirname, '/public'))); 

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

//REST API
app.get('/api/articles', articleController.list);
app.post('/api/articles', articleController.create);

//Lets start our server
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});