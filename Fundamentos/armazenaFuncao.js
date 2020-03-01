const imprimirSoma = function(a, b) { // Uma função anonima
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função Arrow em uma variável

const soma = (a, b) => { // Forma expandida
    return a + b
}
console.log(soma(2, 3))

const subtracao = (a, b) => a - b // Retorno implícito (Return a - b)
console.log(subtracao(2, 3))