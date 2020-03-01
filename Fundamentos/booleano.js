let estaAtivo = false
console.log(estaAtivo)

estaAtivo = true
console.log(estaAtivo)

estaAtivo = 1
console.log(estaAtivo) // Imprime um valor numério

console.log(!(!estaAtivo)) // Dupla negação = Verdadeiro
console.log(!estaAtivo) // Negação = Falso
console.log(!(!false), !(!true))

console.log('Analisando verdadeiros...')
console.log(!(!5))
console.log(!(!-1))
console.log(!(!' '))
console.log(!(![]))
console.log(!(!{}))
console.log(!(!1 / 0))
console.log(!(!true))

console.log('Analisando falsos...')
console.log(!(!0))
console.log(!(!''))
console.log(!(!null))
console.log(!(!NaN))
console.log(!(!undefined))
console.log(!(!false))