'use strict';
var should = require('should');
var sinon = require('sinon');

describe('Book Controller Test', function () {
    describe('Post', function () {
        it('should not have an empty title', function () {
            var Book = function (Book) {
                this.save = function () {
                };
            }

            var req = {
                body: {
                    author: 'James Bond'
                }
            }

            var res = {
                status: sinon.spy(),
                send: sinon.spy()
            }

            var bookController = require('../controllers/bookController')(Book);

            bookController.post(req, res);

            res.status.calledWith(400).should.equal(true, 'Bad Status');
            res.send.calledWith('Title should not be empty').should.equal(true);
        })
    })
})