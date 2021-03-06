const https = require('https')
const express = require('express')
const fs = require('fs')

const app = express()

app.get('/', (req, res) => {
    res.send('Este site usa SSL e HTTP :D')
})

const options = {
    key: fs.readFileSync('ssl.key'),
    cert: fs.readFileSync('key.cert')
}

https.createServer(options, app).listen(process.env.PORT)