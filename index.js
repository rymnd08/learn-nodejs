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

    const readStream = fs.createReadStream('./sample.txt', {encoding: 'utf-8'})
    const writeStream = fs.createReadStream('./readSample.txt')
    readStream.on('data', chunk =>{
        writeStream()
    })

})

server.listen(3000, 'localhost', () => {
    console.log('server running on port 3000')
})