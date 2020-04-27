const porta = 3003 // Declaração da Porta do Processo (Rede)
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('../router/store')

/* Usar ao invés do body-parser
app.use(express.json()) // Permite POST com Body em JSON Format "PARSING" => application/json
app.use(express.urlencoded({ extended: true })) // Permite POST com Body em Form application/x-www-form-urlencoded
*/

/*
app.get('/produtos', (req, res, next) => {
  console.log('Middleware 1...')
  next()  
})*/


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(routes)

app.listen(porta, _ => {
  console.log(`Servidor está executando na porta: ${porta}.`)
})




