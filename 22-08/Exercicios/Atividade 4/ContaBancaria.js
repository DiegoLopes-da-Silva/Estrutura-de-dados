class ContaBancaria {
    #_saldo;

    constructor() {
    this.#_saldo = 0;
}

    depositar(valor){
        if (valor <= 0) {
            console.log("Valor de depósito inválido!");
            return;
        }
        
        console.log(`Depósito de ${valor} realizado.`);
                this.#_saldo += valor;
    }

    sacar(valor){
        if (valor <= 0) {
            console.log("Valor de saque inválido!")
            return;
        }
        

        if (this.#_saldo < valor) {
            console.log (`Saldo insuficiente! Operação cancelada.`)
            return;    
        }
        this.#_saldo -= valor;
            console.log(`Saque de ${valor} realizado.`);

    }

    verSaldo(){
        console.log (`O saldo atual é de ${this.#_saldo}`)
    }
}

module.exports = ContaBancaria;