const express = require('express')

const signRouter = express.Router();


    
signRouter.get('/', function (req, res) {
            res.render("sign",
                {
                    nav: [{ link: '/books', name: 'Books' }, { link: '/authors', name: 'Author' },{ link: '/login', name: 'Login' }],
                    title: "sign"
                })
        })

        

            module.exports = signRouter;