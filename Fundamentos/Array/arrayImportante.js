const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o último elemento do array
pilotos.push('Verstappen') // Adiciona no final do array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
pilotos.unshift('Hamilton') // Adiciona no inicio do array
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa') // Depois da 2a posição do array, adiciona os pilotos sem remoção
console.log(pilotos)

pilotos.splice(3, 1) // Remove o elemento na posição 3
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // Novo array iniciando do indice 2
const algunsPilotos2 = pilotos.slice(1, 4) // Novo array do indice 1 até o 4(não é incluso)
console.log(`Alguns 1: ${algunsPilotos}`)
console.log(`Alguns 2: ${algunsPilotos2}`)