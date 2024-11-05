class Funcionario {
	nome:string
    salarioBase:number
    email:string
    
    constructor(nome:string, salarioBase:number) {
    	this.nome = nome
        this.salarioBase = salarioBase
    }
    
    calcularSalario() {
    	return this.salarioBase
    }
}

class Gerente extends Funcionario {
	bonus:number
    
    constructor(nome:string, salarioBase:number, bonus:number) {
    	super(nome, salarioBase)
        this.bonus = bonus
    }
    
	calcularSalario() {
    	return this.salarioBase + this.bonus
    }
}

class Vendedor extends Funcionario { //caso o valor da comissão for determinado previamente, a necessidade de um construtor é nula. Porém, se a comissão for opcional, ela não poderá estar dentro de um método, como o "calcularSalario".
	comissao:number = 0
    
    
    calcularSalario() {
    	return this.salarioBase + this.comissao
    }
}

let funcionario = new Funcionario('Robert', 2000)
console.log('Salário: ', funcionario.calcularSalario())
console.log('Nome: ', funcionario.nome)

let gerente = new Gerente('Robertin', 2000, 400)
console.log('Salário: ', gerente.calcularSalario())
console.log('Nome: ', gerente.nome)

let vendedor = new Vendedor('Robertonho', 3000)
console.log('Salário: ', vendedor.calcularSalario())
console.log('Nome: ', vendedor.nome)