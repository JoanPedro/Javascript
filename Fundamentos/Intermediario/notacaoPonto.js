console.log(typeof console)
console.log(Math.ceil(6.1)) // Arredonda para cima.

const obj = {}
obj.nome = 'Bola'
obj['nome'] = 'Vassoura'
console.log(obj.nome)

function Obj(nome, nome3) {
    this.nome = nome
        /* Torna público após instância.
         * O que basicamente está sendo dito é que, a partir do momento que for criado/instânciado
         * um novo objeto a partir da função Obj, o "this" está referindo-se diretamento pro novo objeto
         * instanciado. Ex: const obj2 = new Obj('Joan') => Está referindo-se:
         * 'Joan' estará alocado diretamente em obj2.nome! This referiu-se à 'obj2', a nova instância
         */
    var nome2 = nome3
    nome4 = 'Pedro'
    this.executando = function() {
        console.log('Executando....')
    }
}

const obj2 = new Obj('Joan', 'Pedro')
console.log(obj2.nome, obj2.nome2, obj2.nome4)

const obj3 = new Obj('Oliveira')
console.log(obj2.nome, obj3.nome)

obj2.executando()
obj3.executando()