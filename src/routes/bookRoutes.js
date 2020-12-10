const express = require('express')

const booksRouter = express.Router();

var books = [
    {
        title: 'Alice in Wonderland',
        author: 'Lewis Carrol',
        genre: 'drama',
        img: "m1.jpeg"
    },
    {
        title: 'Agni Veena',
        author: 'Kazi Nasrul Islam',
        genre: 'writer',
        img: "m2.jpeg"
    },
    {
        title: 'Ben Hur',
        author: 'Lewis Wallace',
        genre: 'short story',
        img: "m3.jpeg"
    }
]
booksRouter.get('/', function (req, res) {
    res.render("books",
        {
            nav: [{ link: '/books', name: 'Books' }, { link: '/authors', name: 'Author' }],
            title: "Books",
            books
        })
})

booksRouter.get('/:id', function (req, res) {
    const id = req.params.id;
    res.render("book",
        {
            nav: [{ link: '/books', name: 'Books' },
            { link: '/authors', name: 'Author' }],
            title: "Book",
            book: books[id]
        })
})

module.exports = booksRouter;

