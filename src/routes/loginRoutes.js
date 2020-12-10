const express = require('express')

const loginRouter = express.Router();


    
    loginRouter.get('/', function (req, res) {
            res.render("login",
                {
                    nav: [{ link: '/books', name: 'Books' }, { link: '/authors', name: 'Author' }, { link: '/sign', name: 'Sign-Up' }],
                    title: "Login"
                })
        })

        

            module.exports = loginRouter;