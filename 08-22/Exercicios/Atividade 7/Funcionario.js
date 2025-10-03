class Funcionario {
    nome = ""
    salario = 0;

    constructor(nome , salario) {
        this.nome = nome;
        this.salario = salario;
       
    }

    calcularBonus(valor) {
        this.salario = this.salario + valor
    }
    
    mostrarValor() {
        console.log (`O salario atual do ${this.nome} é de: ${this.salario}`)
    }
}

class Desenvolvedor extends Funcionario {
    calcularBonus(valor) {
        this.salario = this.salario + (valor * 1.15)
    }
}

class Gerente extends Funcionario {
    calcularBonus(valor) {
        this.salario = this.salario + (valor * 1.30)
    }
}

module.exports = {Funcionario, Desenvolvedor, Gerente}