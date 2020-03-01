// IMPORTANTE!

console.log(typeof Object)
console.log(typeof new Object) // Instanciando uma função.

const cliente = function() {}

console.log(typeof cliente)
console.log(typeof new cliente)

class Produto {} // ES6 -> Convertido internamente para uma função. 
console.log(typeof Produto)
console.log(typeof new Produto())

class Celular {
    nome
    versao
    preco
    desconto
}

function CelularNome() {
    var nome
    var versao
    var preco
    var desconto
}

const novoCelular = new Celular
novoCelular.nome = 'Iphone'
novoCelular.versao = '10'
novoCelular['preco'] = 999.99
novoCelular['desconto'] = 0.05

console.log(typeof novoCelular, typeof Celular, novoCelular)

const novoCelular2 = new CelularNome
novoCelular2.nome = 'Motorola'
novoCelular2.versao = 'G5'
novoCelular2.preco = 999.99
novoCelular2.desconto = 0.10

console.log(typeof novoCelular2, typeof CelularNome, novoCelular2)