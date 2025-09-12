class Carro {
    constructor(modelo, ano, velocidadeC) {
        this.modelo = modelo
        this.ano = ano
        velocidadeC = velocidadeC
    }

    acelerar(){
        velocidadeC += 10
        console.log (`A velocidade do seu carro ${this.modelo} aumentou para ${velocidadeC}`) 
    }

    freiar(){
        this.velocidade -= 5
        console.log (`A velocidade do seu carro ${this.modelo} caiu para ${velocidadeC}`) 
    }
}


class Moto {
    constructor(modelo, ano, velocidadeM) {
        this.modelo = modelo
        this.ano = ano
        this.velocidade = velocidadeM
    }
    acelerar(){
        this.velocidade =+ 15
        console.log (`A velocidade da sua moto ${this.modelo} aumentou para ${this.velocidade}`)
    }

    freiar(){
        this.velocidade =- 5
        console.log (`A velocidade da sua moto ${this.modelo} caiu para ${this.velocidade}`)
    }
}

module.exports = (Carro, Moto)