const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado...')
    } else {
        console.log('Reprovado...')
    }
}

imprimirResultado(7)
imprimirResultado(5)
imprimirResultado('Epa!')

Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}

const ImprimirResultado2 = function(nota) {
    if (nota.entre(9, 10)) {
        console.log('Aluno à ser honrado!')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aluno Aprovado!')
    } else if (nota.entre(4, 6.99)) {
        console.log('Aluno para recuperação!')
    } else if (nota.entre(0, 3.99)) {
        console.log('Aluno reprovado!')
    } else {
        console.log('Nota inválida!')
    }
}

ImprimirResultado2(10)
ImprimirResultado2(8.5)
ImprimirResultado2(7.5)
ImprimirResultado2(6.5)
ImprimirResultado2(4.5)
ImprimirResultado2(1.5)
ImprimirResultado2(12)
ImprimirResultado2(-1)