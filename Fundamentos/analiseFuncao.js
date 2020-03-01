// Quase tudo é função.

console.log(typeof Object)

class Produto {}

console.log(typeof Produto)

/* --- */

// Função sem Retorno. Busque sempre definir bons nomes para as funções.

function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(1, 1)
imprimirSoma('Bem ', 'Vindo')
imprimirSoma('Rua ', 10)

/* -- Caso -- */

imprimirSoma(2) // Valor definido + undefined = Not a number
imprimirSoma(1, 2, 3, 4, 5, 6) // Analisa somente os 2 primeiros, A e B.
imprimirSoma()

function soma(a = 0, b = 0) {
    return (a + b)
}

console.log(soma(10))
console.log(soma(10, 10))
console.log(soma())