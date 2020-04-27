const express = require('express')
const app = express()
const PORT = 3333

app.use('/', (req, res) => {
  res.send('Ola')
})

app.listen(PORT, _ => {
  console.log(`Servidor está executando na PORTA: ${PORT}.`)
})