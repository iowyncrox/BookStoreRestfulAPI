'use strict';
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bookRouter = express.Router();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var db = mongoose.connect('mongodb://localhost/bookAPI');
var Book = require('./models/bookModel');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api', bookRouter);

app.get('/', function (req, res) {
    res.send('welcome');
});

app.listen(port, function () {
    console.log('server running on port :' + port);
});