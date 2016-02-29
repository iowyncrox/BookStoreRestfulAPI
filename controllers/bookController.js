'use strict';
var bookController = function (Book) {
    var returnObject = {};

    returnObject.post = function (req, res) {
        if (!req.body.title) {
            res.status(400);
            res.send('Title should not be empty')
        } else {
            var book = new Book(req.body);
            console.log(book);
            book.save();
            res.status(201);
            res.send(book);
        }
    }

    returnObject.get = function (req, res) {
        var query = {};
        if (req.query.genre) {
            query.genre = req.query.genre;
        }
        Book.find(query, function (err, books) {
            if (err) {
                res.status(500);
                console.log(err);
            } else {
                res.json(books);
            }
        });
    }

    return returnObject;
}

module.exports = bookController;