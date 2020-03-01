{
    {
        {
            {
                var acontece = 'Acontece?'
                console.log(acontece)
            }
        }
    }
}

console.log(acontece) // Dentro de um bloco que não seja uma função, será visível fora do bloco. Escopo.

function testando() {
    var local = 123
    console.log(local)
}

testando()

//console.log(local) -> Erro
// Busque fugir de variáveis com escopo global.