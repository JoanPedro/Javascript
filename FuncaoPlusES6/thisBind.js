const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas.

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // bind amarra determinado objeto para ser o dono da execução.

function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
            console.log(self.idade)
    } /*.bind(this)*/ , 1000);
}

new Pessoa // Instancia para um objeto.