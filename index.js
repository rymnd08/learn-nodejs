const express = require('express')
const multer = require('multer')
const router = express.Router()
const app = express()

const upload = multer({dest: './uploads'})


router.route('/kape')
    .get((req, res) => {
        res.send('kape')
    })
    .post((req, res)=>{
        res.json({kape: 'mainit'})
    })


app.listen(3000)