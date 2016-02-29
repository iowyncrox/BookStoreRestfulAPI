'use strict';
var express = require('express');

var routes = function (Book) {
    var bookRouter = express.Router();
    var bookController = require('../controllers/bookController')(Book);

    bookRouter.route('/books')
        .post(bookController.post)
        .get(bookController.get);

    bookRouter.route('/books/:bookId')
        .get(function (req, res) {
            Book.findById(req.params.bookId, function (err, book) {
                if (err) {
                    res.status(500);
                    console.log(err);
                } else {
                    res.json(book);
                }
            });
        });
    return bookRouter;
};

module.exports = routes;