abstract class FormaGeometrica {
    protected base:number;
    protected altura:number;

    constructor(base:number, altura:number) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {

    }
}

class Retangula extends FormaGeometrica {
    calcularArea() {
        return this.base * this.altura;
    }
}

class Triangulo extends FormaGeometrica {
    calcularArea() {
        return (this.base*this.altura)/2;
    }
}

let r: FormaGeometrica = new Retangula(3,4);
console.log(r.calcularArea())