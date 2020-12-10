const express = require('express')

const adminRouter = express.Router();
adminRouter.get('/', function(req, res) {
    res.render("addBook", {
        nav: [{ link: '/books', name: 'Books' }, { link: '/authors', name: 'Author' }, { link: '/sign', name: 'Sign-Up' }],

        title: "Library"
    })
})
adminRouter.get('/add', function(req, res) {
    res.send("Hey I am Added");

})


// function router(nav) {
//     adminRouter.get('/', function(req, res) {
//         res.render("addBook", {
//             nav,
//             title: "Library"
//         })
//     })

//     return adminRouter;

// }



module.exports = adminRouter;