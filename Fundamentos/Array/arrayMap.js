const nums = [1, 2, 3, 4, 5]

// Map -> Um FOR com proposito, para fazer um mapeamento, uma transformação.

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