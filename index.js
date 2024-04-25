const express = require('express');
const dbConnection = require('./config/config')
const app = express()
require('dotenv').config()


const PORT = process.env.PORT || 4000


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => { res.send('Enciclopedia Zelda') })

dbConnection()

app.listen(PORT, () => {
    console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})