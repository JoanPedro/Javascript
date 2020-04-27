const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3333

app.use(bodyParser.json())

app.use('/', (req, res) => {
  res.send('Ola')
})

app.listen(PORT, _ => {
  console.log(`Servidor está executando na PORTA: ${PORT}.`)
})