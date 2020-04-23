const porta = 3003 // Declaração da Porta do Processo (Rede)
const app = require('express')()

/*
app.get('/produtos', (req, res, next) => {
  console.log('Middleware 1...')
  next()  
})*/

app.get('/produtos', (req, res, next) => {
  res.send({nome: 'Notebook', preco: 1299.99}) // Converte para JSON (método send faz automaticamente)
})

app.listen(porta, _ => {
  console.log(`Servidor está executando na porta: ${porta}.`)
})




