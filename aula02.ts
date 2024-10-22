abstract class Animal {
    nome:string
    idade:number

    constructor(nome:string, idade:number) {
        this.nome = nome
        this.idade = idade
    }

    emitirSom() {

    }
}

class Cachorro extends Animal {
    emitirSom() {
        console.log('Ruf')
    }
}

class Gato extends Animal {
    emitirSom() {
        console.log('Snif')
    }
}

//const rex = new Cachorro('Rex', 3)
//console.log(rex.nome)
//rex.emitirSom()

//const lili = new Gato('lili', 3)
//console.log(lili.nome)
//lili.emitirSom()


let animais: Animal[] = [
    new Cachorro('Rex', 3)
    new Gato('Rengar', 5)
]

animais.forEach(animal => {
    console.log(animal.nome)
    animal.emitirSom()
})