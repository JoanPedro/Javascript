let valor // Não inicializada.

console.log(valor) // Undefined. Nada atribuido. Nunca inicializada.
    //console.log(valor2) -> Ainda não é definida. Gera um erro.

valor = null // Não aponta para nenhum endereço de memória. Ausência de valor
console.log(valor)
    //console.log(valor.toString()) // Gera um erro.

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 999.99

console.log(produto.preco, produto)