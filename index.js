const fs = require('fs')

const readStream = fs.createReadStream('./kape.txt', {encoding: 'utf-8'})
const writeStream = fs.createWriteStream('kape2.txt')

// readStream.on('data', chunk =>{
//     console.log('-----NEW CHUNK-----')
//     console.log(chunk)
//     writeStream.write('\n New Chuck \n')
//     writeStream.write(chunk, (err)=>{

//     })
    
// })
//same as the commented code above
readStream.pipe(writeStream)