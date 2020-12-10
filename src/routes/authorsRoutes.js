const express = require('express')

const authorsRouter = express.Router();

var authors = [
        {
            title: 'Pathumma',
            author: 'basheer',  
            genre: 'drama',
            img: "a.jpeg"
        },
        {
            title: 'Death',
            author: 'Sadhguru',
            genre: 'Spirituality',
            img: "a2.jpeg"
        },
        {
            title: 'two states',
            author: 'chetan bhagath',
            genre: 'drama',
            img: "a3.jpeg"
        }
    ]
    
    authorsRouter.get('/', function (req, res) {
            res.render("authors",
                {
                    nav: [{ link: '/books', name: 'Books' }, { link: '/authors', name: 'Author' }],
                    title: "Authors",
                    authors
                })
        })

        authorsRouter.get('/:id', function (req, res) {
                const id = req.params.id;
                res.render("author",
                    {
                        nav: [{ link: '/books', name: 'Books' },
                        { link: '/authors', name: 'Author' }],
                        title: "Book",
                        author: authors[id]
                    })
            })

            module.exports = authorsRouter;