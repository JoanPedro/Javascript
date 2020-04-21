console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Joan', 'Pedro', 'Bia')
console.log(aprovados)

aprovados = ['Pedro', 'Bia', 'Joan']
console.log(aprovados[0], aprovados[1], aprovados[2], aprovados[3]) // [3] não existe -> Undefined

aprovados[3] = 'Paulo' // Utilizado para substituição de posição existente
aprovados.push('Rachell') // Utilizado para adição na última posição -:> Pilha
console.log(aprovados.length)

aprovados[9] = 'Maria'
console.log(aprovados.length)
console.log(aprovados[8] === undefined) // Extritamente igual 
console.log(aprovados)

aprovados.sort() // Altera o array original, ordena
console.log(aprovados)

aprovados = ['Joan', 'Pedro', 'Oliveira']
aprovados.splice(3, 1, 'de Soza') /* A partir do elemento 3, adicione 1 elemento 
                                  na posição 3 -> 'de Souza' */
console.log(aprovados)

