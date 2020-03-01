const altura = 1.0
const altura2 = Number('1.75')

console.log(altura, altura2)
console.log(Number.isInteger(altura))

const altura3 = 1.75

console.log(Number.isInteger(altura3), Number.isInteger(altura2))

const somaAlturas = altura + altura2 + altura3
const mediaAlturas = somaAlturas / 3

console.log(somaAlturas, mediaAlturas)

const altura4 = 1.75632
const altura5 = 1.75332

const somaAlturas2 = altura4 + altura5
const mediaAlturas2 = somaAlturas2 / 2

console.log(somaAlturas2, mediaAlturas2)
console.log(somaAlturas2.toFixed(2), mediaAlturas2.toFixed(2))