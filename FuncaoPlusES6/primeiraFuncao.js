const area = function(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m²`)
    } else {
        return area
    }
}

area(25, 1)
console.log(area(19, 1))

function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i] // Argumento disponível quando não tem-se parâmentos diretamente na função.
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 3.3, 6.6))
console.log(soma(2.2, 5.5, 6.6, " Testando"))
console.log(soma('a', 'b', 'c'))