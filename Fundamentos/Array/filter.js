// Filtra um Array. Elemento por elemento.

const produtos = [ // Array de objetos
  {nome: 'Notebook', preco: 2499, fragil: true},
  {nome: 'iPad Pro', preco: 4199, fragil: true},
  {nome: 'Copo de Vidro', preco: 12.99, fragil: true},
  {nome: 'Copo de Plástico', preco: 1.99, fragil: false}
]

console.log(produtos.filter(p => {
  return p.preco > 2500
})) // Função Callback que se verdadeiro, retorna um array com objetos de preco superiores a 2500

// Filtrando Produtos por Fragilidade ou Preço

const produtosFrageis = fragilidade => {
  return fragilidade.fragil === true
}
console.log('Produto Frágil: ', produtos.filter(produtosFrageis))

const produtosCaros = valor => {
  return valor.preco >= 2499
}
console.log('Produtos Caros: ', produtos.filter(produtosCaros))

// Filtrando Produtos por Fragilidade e Preço

const produtosFrageisECaros = objetos => {
  return (objetos.preco > 2500 && objetos.fragil === true)
}
console.log('Produtos Caros e Frágeis: ', produtos.filter(produtosFrageisECaros))