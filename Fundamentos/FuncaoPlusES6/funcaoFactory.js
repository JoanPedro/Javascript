// Factory Function

function CriarPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
    }
}

console.log(CriarPessoa('Joan', 'Souza'), typeof CriarPessoa())