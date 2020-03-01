// O Javascript apresenta uma tipagem fraca/dinâmica. Tornando-a mais flexível.

let any = 'Legal' // '' <- Indica um texto livre. 
console.log(any, typeof any)

any = Math.PI
console.log(any, typeof any)

// Devido a tipagem fraca, a variável pode assumir tanto valor de texto quanto número.
// Evite criar nomes genéricos e siglas. 

let valor = 'Any '
let numero = 1

console.log((valor + numero), typeof(valor + numero))