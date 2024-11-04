class Funcionario {
    nome:string
    salarioBase:number

    constructor(nome:string, salarioBase:number) {
        this.nome = nome
        this.salarioBase = salarioBase
    }

    calcularSalario(){
        return this.salarioBase
    }
}

class Gerente extends Funcionario {
    bonus:number

    constructor(nome:string, salarioBase:number, bonus:number) {
        super(nome, salarioBase)
        this.bonus = bonus
    }

    calcularSalario(){
        return this.salarioBase + this.bonus
    }
}

class Vendedor extends Funcionario {
    comissao:number

    constructor(nome:string, salarioBase:number, comissao:number) {
        super(nome, salarioBase)
        this.comissao = comissao 
    }

    calcularSalario() {
        return this.salarioBase + this.comissao
    }
}

const funcionario1 = new Funcionario('Rodrigo', 3000)
const gerente1 = new Gerente('Marcelo', 3000, 500)
const vendedor1 = new Vendedor('Ricardo', 3000, 1400)

console.log('Funcionario:', funcionario1.nome)
console.log('Funcionario:', funcionario1.calcularSalario())

console.log('Gerente:',gerente1.nome)
console.log('Gerente:', gerente1.calcularSalario())

console.log('Vendedor:', vendedor1.nome)
console.log('Vendedor:', vendedor1.calcularSalario())