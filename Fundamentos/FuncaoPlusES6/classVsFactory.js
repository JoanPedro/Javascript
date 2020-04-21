// Class ES6

class Pessoa {
  constructor(nome){
    this.nome = nome
  }

  falar(){
    console.log(`Meu nome é ${this.nome}`)
  }
}

const pessoa1 = new Pessoa('Joan')
pessoa1.falar()

// Factory

const CriarPessoa = nome => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  }
}

const JoanPedro = CriarPessoa('Joan Pedro')
JoanPedro.falar()

// Construtora

function Pessoas(nome){
  this.nome = nome

  this.falar = _ => {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const JoanPedroOS = new Pessoas('Joan Pedro Oliveira de Souza')
JoanPedroOS.falar()