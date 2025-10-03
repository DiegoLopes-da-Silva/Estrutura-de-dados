class Veiculo {
    constructor(modelo, ano, velocidade) {
        this.modelo = modelo
        this.ano = ano
        this.velocidade = velocidade
    }

    acelerar(){
        console.log (`Tu acelera ai`)
    }

    freiar(){
        console.log(`Tu freia ai`)
    }

}

class Carro extends Veiculo {

    acelerar(){

        this.velocidade = this.velocidade + 10
        console.log (`A velocidade do seu carro ${this.modelo} aumentou para ${this.velocidade}`) 
    }

    freiar(){
        this.velocidade = this.velocidade - 5
        console.log (`A velocidade do seu carro ${this.modelo} caiu para ${this.velocidade}`) 
    }
}


class Moto extends Veiculo {
        
    acelerar(){
        this.velocidade = this.velocidade + 15
        console.log (`A velocidade da sua moto ${this.modelo} aumentou para ${this.velocidade}`)
    }

    freiar(){
        this.velocidade = this.velocidade - 5
        console.log (`A velocidade da sua moto ${this.modelo} caiu para ${this.velocidade}`)
    }
}

module.exports = {Veiculo, Carro, Moto}