const http = require('http')
const _ = require('lodash')
http.createServer( (req, res) =>{

    res.end(JSON.stringify({kape: `${_.random(0, 100)}`}))
}).listen(3000, ()=>{
    console.log('server running on 3000')
})