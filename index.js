const fs = require('fs')
// Read file
// fs.readFile('./kape.txt', (err, data)=>{
//     if(err) console.log(err)

//     console.log(data.toString())
// })

// // 
// // Write file
// fs.writeFile('./kape.txt', 'Dati ka bang tangaa!!', ()=>{
//     console.log('File was written')
// })

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err)=>{
        if(err) console.log(err)
    
        console.log('folder created')
    })
}
// else{
//     fs.rmdir('./assets', err=>{
//         if(err) console.log(err)

//         console.log('folder removed')
//     })
// }

//deleting files
if(fs.existsSync('./kape.txt')){
    fs.unlink('./kape.txt', err =>{
        if(err) console.log(err)

        console.log('file deleted successfully')
    })
}