const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'pages')


PORT = 3000
app.listen(PORT)

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})
app.use((req, res) => {
    res.status(404).render('404')
})