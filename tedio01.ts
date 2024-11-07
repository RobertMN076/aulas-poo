class Calculo {
    numero01:number
    numero02:number

    constructor(numero01:number, numero02:number) {
        this.numero01 = numero01
        this.numero02 = numero02
    }
}

class Soma extends Calculo{

    adicao() {
        return this.numero01 + this.numero02
    }
}

class Subtracao extends Calculo{

    subtrair() {
        return this.numero01 - this.numero02
    }
}

class Divisao extends Calculo{

    dividir() {
        return this.numero01/this.numero02
    }
}

class Multiplicacao extends Calculo {

    multiplicar() {
        return this.numero01*this.numero02
    }
}