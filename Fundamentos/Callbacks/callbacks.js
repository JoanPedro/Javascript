// Callback 1

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach( fabricante => {
  console.log(fabricante)
})

// Callback 2

const notas = [7.7, 7, 3.4, 5, 8, 10, 4.9, 6.9, 5.5]
const notasBaixasSemCallback = []
let notasBaixasComCallback = []

// Sem callback

for(let i in notas) {
  if(notas[i] < 7) {
    notasBaixasSemCallback.push(notas[i]) // Push para adicionar as notas menores que 7.
  }
}

console.log(notasBaixasSemCallback)

// Com callback

notasBaixasComCallback = notas.filter(nota => {
  return nota < 7 // Retorna booleano para filtrar notas menores que 7.
})

console.log(notasBaixasComCallback)