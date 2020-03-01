let a = 10

console.log(this.a) // Não encontra
console.log(global.a) // Não encontra

global.b = 100
console.log(global.b) // Encontra

this.c = 150
console.log(this.c) // Encontra

console.log(module.exports.c)
console.log(module.exports === this)

this.k1 = 1
this.k2 = 2
this.k3 = 3

console.log(module.exports.k1, module.exports.k2, module.exports.k3)

/*- Equivalente -*/
//module.exports = { w1: 1, w2: 2, w3: 3 }


/* -- Erros e verificando -- */
function tratarErro(error) {
    //throw 'mensagem'
    throw {
        nome: error.name,
        msg: error.message,
        date: new Date,
    }
}

function imprimirCapsLock(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (error) {
        tratarErro(error)
    } finally { // Sempre executada sendo em try ou catch.
        console.log('Função Finalizada')
    }
}

const obj = { name: 'lowcase' }
imprimirCapsLock(obj)

const objError = { nome: 'uppercase' }
imprimirCapsLock(objError) // Isso aqui gera erro. A função upperCase não pode ler propriamente um undefined.