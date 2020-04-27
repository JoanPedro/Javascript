const express = require('express')
const router = express.Router()
const bancoDeDados = require('../src/bancoDeDados')

router.get('/produtos', (req, res) => {
  res.send(bancoDeDados.getProdutos())  
})

router.get('/produtos/:id', (req, res) => {
  res.send(bancoDeDados.getProdutoById(req.params.id)) // Adquire o Id dos Parametros da Requisição 
})

router.post('/produtos', (req, res) => {
  const produto = bancoDeDados.saveProdutos({
    nome: req.body.name,
    preco: req.body.preco
  })
  res.send(produto)
})

router.put('/produtos/:id', (req, res) => {
  const produto = bancoDeDados.saveProdutos({
    id: req.params.id,
    nome: req.body.name,
    preco: req.body.preco
  })
  res.send(produto)
})

router.delete('/produtos/:id', (req, res) => {
  const produto = bancoDeDados.deleteProdutos(req.params.id)
  res.send(produto)
})

module.exports = router