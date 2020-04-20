function carro (velocidadeMaxima = 200, delta = 5) {
  // Método PRIVADO
  let velocidadeAtual = 0

  // Método Público, pode ser acessado com .acelerar()
  this.acelerar = _ => {
    if(velocidadeAtual + delta <= velocidadeMaxima){
      velocidadeAtual += delta
    } else velocidadeAtual = velocidadeMaxima
  }

  // Método Público, pode ser acessado com .getVelocidadeAtual()
  this.getVelocidadeAtual = _ => {
    return velocidadeAtual
  }
}

const uno = new carro 
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
