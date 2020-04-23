const sequence = {
  _id: 1,
  get id() { return this._id++ }
}

const produtos = {}

const saveProdutos = produto => {
  if(!produto.id) produto.id = sequence.id
  produtos[produto.id] = produto
  
  return produto
}

const getProdutoById = id => {
  return produtos[id] || {}
}

const getProdutos = _ => {
  return Object.values(produtos)
}

const deleteProdutos = id => {
  const produto = produtos[id]
  delete produtos[id]
  return produto
}

module.exports = { saveProdutos, getProdutoById, getProdutos, deleteProdutos }