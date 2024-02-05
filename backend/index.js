const express = require("express")
const cors = require("cors")
const port = 4000
const db = require("./database.js")

const app = express()

app.use(cors())
app.use(express.urlencoded())

app.get("/makanan",(_, res) => {
    db.query("SELECT * FROM makanan", (_, r) => {
        test = ""
        r.map(data => 
            test += `<li> ${data.nama_makanan} </li>`
            )
        res.send(test)
    })
})

app.post("/makanan", (req, res) => {
    const namafod = req.body.makan
    db.query(`INSERT INTO makanan (nama_makanan) VALUES ('${namafod}')`, (err, _) => {
        if(err) return res.send("Error nih.")

        res.send("Berhasil, Bos.")
    })
})

app.listen(port, ()=>{
    console.log("Server running!" + port)
})