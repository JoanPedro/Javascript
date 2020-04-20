let contador = 1
while (contador <= 5) {
    console.log(`Valor do contador é: ${contador}`)
    contador++
}

for (let index = 0; index <= 5; index++) {
    console.log(`Valor do index é: ${index}`)
}

const vetor = [1, 2.2, 5.4, 2.1, 6.8, 9, 8.44]

for (let index = 0; index < vetor.length; index++) {
    console.log(`Valor do vetor é: ${vetor[index]}`)
}

for (key in vetor) {
    console.log(`O Índice: ${key} e o valor: ${vetor[key]}`)
}

class Pessoa {
    nome
    sobrenome
    idade
    peso
}

const person = new Pessoa
person.nome = 'Ana';
person.sobrenome = 'Silvestre';
person.idade = 21;
person.peso = 62

for (key in person) {
    console.log(`${key} = ${person[key]}`)
}