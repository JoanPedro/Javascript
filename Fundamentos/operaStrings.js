const escola = "SENAI"
console.log(escola.charAt(4)) // Índice 4 dentro da constante.
console.log(escola.charAt(5)) // Retorna vazio, não existe o índice 5.

console.log(escola.charCodeAt(3)) // Retorna o valor do índice de acordo com a tabela ASCII
console.log(escola.indexOf('E')) // Retora a posição do 'E'.

console.log(escola.substring(1)) // Do índice 1 até o final.
console.log(escola.substring(0, 3)) //Do índice 0 + 3 caracteres.

console.log(escola.concat(' Cimatec').concat('!'))
console.log(escola + ' Cimatec' + '!')

const forReplace = 'S3NAI'
console.log(escola.replace(/\d/, 'E')) // /\d/ = Substitua todos dígitos por 'E'

let elementos = 'Joan,Pedro,Oliveira'
console.log(elementos, typeof elementos)

elementos = elementos.split(',')

console.log(typeof elementos, elementos[0])
console.log('Joan, Pedro, Oliveira'.split(', '))