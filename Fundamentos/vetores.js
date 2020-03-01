const valores = [10, 20, 30, 40, 50]
console.log(valores[0], valores[4], valores[5])

valores[5] = 60
console.log(valores[5])
console.log(valores)

valores[20] = 210
console.log(valores) // 14 Elementos vazios
console.log(valores.length) // Tamanho do vetor

valores.push({ endereço: 7 }, false, true, 'testando')
console.log(valores) // Não recomendado. Sempre utilizar vetores homogêneos.

console.log(valores.pop()) // Retirar o ultimo valor do vetor, 'testando'
console.log(valores)

delete valores[0]
console.log(valores)

console.log(typeof valores) // Um vetor é do tipo objeto.