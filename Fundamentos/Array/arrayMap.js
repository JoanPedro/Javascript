const nums = [1, 2, 3, 4, 5]

// Map -> Um FOR com proposito, para fazer um mapeamento, uma transformação.
// ... Transforma um array em outro. Elemento por elemento.

let resultado = nums.map(e => {
  return e*2 // Função de transformação para o dobro. Percorre 1 a 1
})
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

let converteReal = nums.map(soma10)
  .map(triplo)
  .map(paraDinheiro)

console.log(converteReal)

// JSON para Map

const carrinhoDeCompras = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.99 }',
  '{ "nome": "Kit de lápis", "preco": 41.50 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultadoPreco = carrinhoDeCompras.map(paraObjeto).map(apenasPreco)
const paraObjetos = carrinhoDeCompras.map(paraObjeto) // Cada Json em cada posição viram objeto.

console.log(resultadoPreco)
console.log(paraObjetos)