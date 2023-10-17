const express = require('express')

const app = express()

PORT = 3000
app.listen(PORT)

app.get('/', (req, res) => {
    res.sendFile('./pages/index.html', { root: __dirname })
})
app.get('/about', (req, res) => {
    res.sendFile('./pages/about.html', { root: __dirname })
})
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})
app.use((req, res) => {
    res.status(404).sendFile('./pages/404.html', { root: __dirname })
})