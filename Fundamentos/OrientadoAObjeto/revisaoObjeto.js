const Produto = new Object

Produto.nome = 'Cadeira'
Produto['marca do produto'] = 'Generica'
Produto.preco = 200

console.log(Produto)
delete Produto.nome
delete Produto['marca do produto']
console.log(Produto)

const Carro = {
    modelo: 'A5',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 32,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Ana',
        idade: '23'
    }, {
        nome: 'Joan',
        idade: '23'
    }],
    calcularValorSeguro: function() {
        //...
    }
}

console.log(Carro.proprietario.endereco.numero)
console.log(Carro['proprietario']['endereco']['numero'])