const pessoa = {
    nome: 'Joan',
    idade: '23',
    peso: 89
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true,
    writable: false,
    value: '06/07/1997'
})

pessoa.dataDeNascimento = '01/02/2013'
console.log(pessoa.dataDeNascimento)

// ES6+

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, d: 4 }
const obj3 = Object.assign(dest, o1, o2)

console.log(obj3)