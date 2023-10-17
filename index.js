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
            break
        case '/sample':
            path = './sample.html'
            break
        default:
            path = './404.html'
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