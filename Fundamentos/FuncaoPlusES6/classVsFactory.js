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

const CriarPessoa = nome => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  }
}

const JoanPedro = CriarPessoa('Joan Pedro')
JoanPedro.falar()
