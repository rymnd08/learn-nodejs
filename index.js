const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) =>{
    // res.setHeader('Content-Type', 'application/json')
    // const person = {
    //     name: 'rymnd',
    //     age: 22
    // }
    // res.write(JSON.stringify(person))
    // res.end()

     res.setHeader('Content-Type', 'text/html')
     fs.ReadStream()


})

server.listen(3000, 'localhost', ()=>{
    console.log('server running on port 3000')
})