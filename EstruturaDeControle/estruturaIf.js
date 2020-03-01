function BoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com nota = ' + nota)
    } else {
        console.log('Reprovado com nota = ' + nota)
    }
}
BoaNoticia(9)
BoaNoticia(5)

function resolveParaVerdadeiro(valor) {
    if (valor) console.log('É verdadeiro...' + valor)
}

resolveParaVerdadeiro(1)
resolveParaVerdadeiro(null)
resolveParaVerdadeiro(undefined)
resolveParaVerdadeiro('')
resolveParaVerdadeiro({})
resolveParaVerdadeiro(0)
resolveParaVerdadeiro('123')
resolveParaVerdadeiro([])
resolveParaVerdadeiro([1, 3])