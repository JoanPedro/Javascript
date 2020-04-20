// Notação Literal
let obj = []

const obj1 = {}
obj.push(obj1)
console.log(typeof obj[0])

// Object em JS
const obj2 = new Object
obj.push(obj2)
console.log(typeof obj[1])

// Funções construturoas

function Produtos(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

let Produto = new Produtos('Sabao', 2000, 0.10)
console.log(Produto, typeof Produto, Produto.getPrecoComDesconto())

// Função Factory -> Padrão de PROJETO!

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const Funcionario1 = criarFuncionario('Joan', 1000, 2)
const Funcionario2 = new criarFuncionario('Maria', 2000, 5)
console.log(Funcionario1.getSalario(), typeof Funcionario1)
console.log(Funcionario2.getSalario(), typeof Funcionario2)