// Par nome/valor

const saudacao = "Olá" // Contexto léxico. Local a qual a variável foi fisicamente definida no código. (1)

function executa() {
    const saudacao = "Tudo bem?" // Contexto léxico (2). Não gera conflito. 
    return saudacao
}

// Objetos são grupos aninhados de Chave/Valor.

const client = {
    nome: 'Joan',
    sobrenome: 'Souza',
    endereco: {
        local: 'Rua... ',
        numero: 132,
        CEP: 40000000
    }
}

console.log(saudacao)
console.log(executa())
console.log(client)