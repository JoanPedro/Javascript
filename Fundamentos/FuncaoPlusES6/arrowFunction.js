let dobro = function(a) {
    return 2 * a
}

dobro = (a) => 2 * a

dobro = _ => 2 * a

dobro = (a) => {
    return 2 * a
}

console.log(dobro(2))

console.log(this === module.exports)
console.log(this === global)

let saudacao = () => 'Olá'
console.log(saudacao())


function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
            console.log(this.idade)
    }, 1000);
}

new Pessoa