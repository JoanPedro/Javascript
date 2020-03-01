const [a] = [50]
console.log(a)

const [k1, , k3, , k5, k6 = 0] = [10, 20, 30, 40] // K1, K2, K3, K4
console.log(k1, k3, k5, k6)

const [, [, nota]] = [
    [, 8, 8],
    [9, 6, 8]
]
console.log(nota)

/* --- */

function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand({ min: 50, max: 40 })) // (1)

const obj = { min: 50, max: 40 }
console.log(rand(obj)) // Equivalencia (1)
console.log(rand({ min: 900 })) // max = 1000.
console.log(rand({})) // min = 0; max = 1000.
    // console.log(rand()) // Erro, não consegue desestruturar objeto undefined.

/* --- */

function rand2({ min = 0, max = 1000 }) {
    if (min > max)[min, max] = [max, min] // Invertendo os valores se min > max. Pelo operador de destructuring
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
        // floor -> Arredonda para o "Chão", para menos.
        // Ceil -> Arredonda para o "Céu", para cima.
}
const obj2 = { min: 40, max: 20 }
console.log(rand2(obj)) // Equivalencia (1)
console.log(rand2({ min: 900 })) // max = 1000.
console.log(rand2({})) // min = 0; max = 1000.
    // console.log(rand()) // Erro, não consegue desestruturar objeto undefined.