for (var index = 0; index < 10; index++) {
    console.log(index)
}

console.log('index = ' + index) // Index = 10

for (let index2 = 0; index2 < 10; index2++) {
    console.log(index2)
}

// console.log(index2) // Erro. Index2 não está definido. Só está presente no contexto do Laço.

const functions = []

for (var index = 0; index < 10; index++) {
    functions.push(function() {
        console.log(index)
    })
}

functions[2]() // Problema histórico do Javascript. O Var não respeita o contexto dentro do laço.
functions[5]()

const functions2 = []

for (let i = 0; i < 10; i++) {
    functions2.push(function() {
        console.log(i)
    })
}

console.log('Contexto do let... ')
functions2[2]()
functions2[8]()