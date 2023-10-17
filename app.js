const express = require('express')
const morgan = require('morgan')
const mysql = require('mysql')




const app = express()
console.log()
app.set('view engine', 'ejs')
app.set('views', 'pages')

//middlewares
// app.use(morgan('tiny'))
// app.use(express.static('assets'))

//server start
PORT = 3000
app.listen(PORT)

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rms_narba"
});

let rabbits
let users

con.connect(function (err) {
    if (err) throw err;
    console.log('db connected')
    con.query("SELECT * FROM `rabbit_profile_tbl`", function (err, result, fields) {
        if (err) throw err;
        console.log('get rabbits complete')
        rabbits = result
    });
    con.query("SELECT * FROM users_tbl", function (err, result, fields) {
        if (err) throw err;
        console.log('get users complete')
        users = result
    });
});



app.get('/users', (req, res) => {
    res.send(users)
})
app.get('/rabbits', (req, res) => {
    res.send(rabbits)
})

app.get('/', (req, res) => {
    const blogs = [
        { title: 'title1', content: 'content1' },
        { title: 'title2', content: 'content2' },
        { title: 'title3', content: 'content3' },
    ]

    res.render('index', { name: 'RYMND J RGLD', blogs })
})
// app.get('/about', (req, res) => {
//     res.render('about')
// })
// app.get('/about-us', (req, res) => {
//     res.redirect('/about')
// })
app.use((req, res) => {
    res.status(404).render('404')
})