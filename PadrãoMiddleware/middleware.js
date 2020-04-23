// Middleware Pattern (Cadeia de Responsabilidade - Chain of Responsability)

const passoUm = (contexto, next) => {
  contexto.valor1 = 'middleware1'
  next()
}

const passoDois = (contexto, next) => {
  contexto.valor2 = 'middleware2'
  next()
}

const passoTres = (contexto) => {
  contexto.valor3 = 'middleware3'
}

const execucao = (contexto, ...middlewares) => {
  const execucaoPasso = indice => {
    middlewares && indice < middlewares.length &&
      middlewares[indice](contexto, () => execucaoPasso(indice +1)) // Recursividade
  }
  execucaoPasso(0)
}

const contexto = {}
execucao(contexto, passoUm, passoDois, passoTres) 
console.log(contexto)

// A ordem dos passos é indiferente. Mas, uma vez que o passoTres é definido como o primeiro passo,
// os passos seguintes não serão realizados, já que não possui o next()