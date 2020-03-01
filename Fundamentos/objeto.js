const produto = {} // Objeto vazio.

produto.nome = 'IPhone'
produto['versao'] = 10

console.log(produto.nome + produto.versao)
console.log(typeof produto)

produto.preco = 999.99
produto['Desconto Blackfriday'] = 0.05

console.log(produto)

produto2 = {
    nome: 'Iphone',
    versao: '09',
    preco: 888.88,
    'Desconto Blackfriday': 0.05,
    objeto: {
        tipo: 'Smart',
        cor: 'Azul'
    }
}

console.log(produto2)

// Objeto não é JSON!

let produtoJson = '{"nome":"Iphone", "versao":"10", "preco":"999.99", "Desconto":0.05}'
console.log(typeof produtoJson)
console.log(produtoJson.nome)

console.log(typeof JSON.parse(produtoJson))

produtoJson = JSON.parse(produtoJson)
console.log(produtoJson.nome)