const imprimirResultado = function(nota) {
    switch (Math.floor(nota)) {
        case 10:
            //console.log('Quadro de Honra')
        case 9:
            console.log('Quadro de Honra!')
            break
        case 8:
        case 7:
            console.log('Aprovado!')
            break
        case 6:
        case 5:
        case 4:
            console.log('Recuperação')
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.5)
imprimirResultado(7.5)
imprimirResultado(6.5)
imprimirResultado(4.5)
imprimirResultado(1.5)
imprimirResultado(12)
imprimirResultado(-1)