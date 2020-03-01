// Lançamento ES6

const nome = 'Joan'
const concatenar = 'Olá ' + nome + ', Bom dia' // Não é possível quebrar linha.

const template = `
    Olá
    ${nome}, Bom dia`

console.log(concatenar, template)

console.log(`1 + 1 = ${1+1}`) // Permite interpretar operações

const capsLock = text => text.toUpperCase() // Função Arrow

console.log(capsLock('joan')) // Indefinido
console.log(`Cuidado...  ${capsLock('joan')}`)