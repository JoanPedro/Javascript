// Novo recurso ES6

const pessoa = {
    nome: 'Joan',
    idade: 22,
    endereco: {
        logradouro: 'Rua Pais das Maravilhas',
        numero: 15
    }
}
console.log(typeof pessoa)

const receber = pessoa.endereco.logradouro
console.log(receber) // Notação Ponto

const { endereco: { logradouro } } = pessoa // Destructuring, Logradouro fica disponível -> Extraido do Objeto pessoa.
console.log(logradouro)

const { endereco: { numero: identificador }, nome: palavra } = pessoa // Destructuring, Numero -> Identificador 
console.log(identificador, palavra) //       ||       Nome -> Palavra disponíveis