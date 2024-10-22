class ContaCorrente {
    numero:number;
    titular:string;
    private saldo:number;

    constructor(aNumero:number, aTitular:string, aSaldo:number){
        this.numero = aNumero;
        this.titular = aTitular;
        this.saldo = aSaldo;
    }

    depositar(valor:number) {
        this.saldo += valor;
    }

    sacar(valor:number) {
        if (valor > 0) {
            if(this.saldo >= valor) {
                this.saldo -= valor
            } else {
                throw new Error ('Saldo insuficiente')
            }
        } else {
            throw "O valor é inválido para saque"
        }
    }

    exibirSaldo() {
        console.log("R$ " + this.saldo);
    }
}


const conta = new ContaCorrente(1, 'Robert', 100);
console.log('Numero: ' + conta.numero);
console.log('Titular: ' + conta.titular);
conta.exibirSaldo()
conta.depositar(150)
conta.exibirSaldo()
conta.sacar(100)
conta.exibirSaldo()
conta.sacar(-200)