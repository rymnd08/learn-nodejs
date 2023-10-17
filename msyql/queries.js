const express = require('express')
const router = express.Router()
const mysql = require('mysql')


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rms_narba"
});

con.connect(function (err) {
    if (err) throw err;
    console.log('connected to db')
});

// const query = util.promisify(con.query)

router.route('/')
    .get((req, res) => {
        con.query("SELECT * FROM users_tbl", function (err, result, fields) {
            if (err) throw err;
            res.send(result)
        });
    })
    .post((req, res) => {
        const uname = req.body.uname
        const upass = req.body.upass

        const sql = `INSERT INTO users_tbl (uname, upass) VALUES ('${uname}', '${upass}') `
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.send(result)
        });
    })



module.exports = router





