{
    console.log('a = ', a)
    var a = 2
    console.log('a = ', a)
}
/* -- Equivalente -- */
/* -- Js fez o içamento da declaração da variável -- */

var b
console.log('b = ', b)
b = 2
console.log('b = ', b)

function testando() {
    var c
    console.log('c = ', c)
    c = 2
    console.log('c = ', c)
}

testando()
    // console.log(c) // Não está disponível no escopo. Devido a função.

// Caso utilizado como o exemplo do var, um erro ocorrerá.
let d = 2
console.log('d = ' + d)