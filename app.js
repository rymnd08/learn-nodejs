const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(express.json())

console.log()
app.set('view engine', 'ejs')
app.set('views', 'pages')

//middlewares
// app.use(morgan('tiny'))
// app.use(express.static('assets'))

//server start
PORT = 3000
app.listen(PORT)

app.use('/users', require('./msyql/queries'))

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