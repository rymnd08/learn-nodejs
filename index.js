const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

    // res.setHeader('Content-Type', 'application/json')
    // const person = {
    //     name: 'rymnd',
    //     age: 22
    // }
    // res.write(JSON.stringify(person))
    // res.end()

    res.setHeader('Content-Type', 'text/html')

    let path = ''

    switch(req.url){
        case '/':
            path = './index.html'
            res.statusCode = 200
            break
        case '/sample':
            path = './sample.html'
            res.statusCode = 200
            break
        case '/aboutme':
            res.statusCode = 301
            res.setHeader('location', '/sample')
            break
        default:
            path = './404.html'
            res.statusCode = 404
            break
    }

    fs.readFile(path, (err, data)=>{
        if(err){
            console.log(err)
            res.end()
        }
        res.end(data)
    })

})

server.listen(3000, 'localhost', () => {
    console.log('server running on port 3000')
})