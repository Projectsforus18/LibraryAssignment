const express = require('express')

const booksRouter = require('./src/routes/bookRoutes')
const authorsRouter = require('./src/routes/authorsRoutes')
const loginRouter = require('./src/routes/loginRoutes')
const signRouter = require('./src/routes/signRoutes')
const adminRouter = require('./src/routes/adminRoutes')
    // const port = process.env.PORT || 2000

const app = express();

// const booksRouter = express.Router();
// const authorsRouter = express.Router();
app.set('view engine', 'ejs')
app.set('views', __dirname + '/src/views')
app.use(express.static('./public'))
app.use('/books', booksRouter)
app.use('/authors', authorsRouter)
app.use('/login', loginRouter)
app.use('/sign', signRouter)
app.use('/admin', adminRouter)

//Creatd router
app.get('/', function(req, res) {
    // res.send("welcome to the blank page...")
    // res.sendFile(_dirname+"/src/views/index.html")
    // res.render("index",{books :['book1', 'book2'],titleName:'Library'})
    res.render("index", {
        nav: [
            { link: '/books', name: 'Books' },
            { link: '/authors', name: 'Author' },
            { link: '/login', name: 'Login' },
            { link: '/sign', name: 'Sign-Up' },
            { link: '/admin', name: 'Add Book' }
        ],
        title: "Library"
    })
})

app.get('/login', function(req, res) {
    res.render("login")
})
app.listen(8000);