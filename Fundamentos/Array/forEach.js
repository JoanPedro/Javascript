const aprovados = ['Agatha', 'Paulo', 'Aldo', 'Daniel', 'Rachel']
/* forEach -> Uma função que aceita 3 parametros e retorna uma callback para cara iteração. 
Similar a um for. "Para cada..."
Parametros: 1. Nome, 2. Valor do Indice(Posição), Array
Percorre sem propósito o array. Elemento por elemento.
*/

aprovados.forEach((nome, indice) => {
  console.log(`${indice + 1}: ${nome}`)
})

// Armazenando a função callback dentro de uma variável
const exibirAprovados = (nome, indice) => {
  console.log(`${indice + 1}: ${nome}`)
}

aprovados.forEach(exibirAprovados)
