const porta = 3003 // Declaração da Porta do Processo (Rede)
const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.use(express.json()) // Permite POST com Body em JSON Format "PARSING" => application/json
app.use(express.urlencoded({ extended: true })) // Permite POST com Body em Form application/x-www-form-urlencoded

/*
app.get('/produtos', (req, res, next) => {
  console.log('Middleware 1...')
  next()  
})*/

app.get('/produtos', (req, res) => {
  res.send(bancoDeDados.getProdutos())  
})

app.get('/produtos/:id', (req, res) => {
  res.send(bancoDeDados.getProdutoById(req.params.id)) // Adquire o Id dos Parametros da Requisição 
})

app.post('/produtos', (req, res) => {
  const produto = bancoDeDados.saveProdutos({
    nome: req.body.name,
    preco: req.body.preco
  })
  res.send(produto)
})

app.listen(porta, _ => {
  console.log(`Servidor está executando na porta: ${porta}.`)
})




