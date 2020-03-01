/* Uma das partes mais importantes: Como você declara suas variáveis.
Busque sempre nomes que reflitam de fato aquilo que você está fazendo. */

var a = 1 // Evite utilizar 'var' para criar variáveis. 

let b = 2
    /* Regra geral, forma mais moderna de criar variáveis.
                Apesar de existir algumas regras específicas.*/

/*
var a = 10
let b = 20

console.log(a, b) // Erro. Variáveis 'let' não podem ser redeclaradas.
*/

var a = 10 // Pode ser redeclarada dentro de um mesmo escopo.
b = 20

console.log(a, b)

a = 100
b = 200

console.log(a, b)

const c = 3
    // c = 30 // Constantes não podem sofrer atribuições.

console.log(c)