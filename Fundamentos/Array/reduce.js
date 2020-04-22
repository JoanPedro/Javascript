// Transformar Array, definido por usuário. O resultado é sempre passado para próxima iteração
// Recebe inicialmente os 2 primeiros elementos, e o resultado é passado para o próximo... até
// Percorrer o ultimo elemento. Sempre o 1o elemento é o Acumulador, 2o elemento é o atual.

const alunos = [
  { nome: 'Pedro', nota: 7.83, bolsista: true},
  { nome: 'Maria', nota: 9.2, bolsista: true},
  { nome: 'João', nota: 9.8, bolsista: false},
  { nome: 'Carlos', nota: 8.33, bolsista: true}
]

const resultado = alunos.map(a => a.nota) // Retorna somente um vetor de Notas
  .reduce((acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual
  })
console.log('Resultado: ', resultado)