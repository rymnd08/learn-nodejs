const express = require('express')
const multer = require('multer')
const router = express.Router()
const cors = require('cors')
const app = express()
app.use(cors())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads'); // Specify the destination directory
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      let orignalName = file.originalname.split('.')
      const ext = orignalName[orignalName.length-1]
      const filename = `${uniqueSuffix}.${ext}`

      cb(null, filename);
    },
  });
const upload = multer({ storage : storage})


router.route('/')
    .get((req, res) => {
        res.send('home')
    })
    .post(upload.single('image'), (req, res) => {

        res.status(200).json({ response: 'kape' })
    })

app.use(router)

app.listen(3000)