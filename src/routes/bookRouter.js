const express = require('express');
const Book = require('../models/bookModel');
const bookRouter = express.Router();

bookRouter.route('/')
    .get((req, res) => {
        Book.find({}, (err, books) => {
            res.json(books)
        })
    })
    .post((req, res) => {
        let book = new Book({title: 'The Bull', author: 'Saki'});
        book.save();
        res.status(201).send(book) 
    });

bookRouter.route('/:bookId')
    .get((req, res) => {
        Book.findById(req.params.bookId, (err, book) => {
            res.json(book)
        })
    });

export default bookRouter;