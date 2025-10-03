class Carro {
    constructor(modelo, ano, velocidade) {
    this.modelo = modelo;
    this.ano = ano;
    this.velocidade = velocidade;
    }
    
acelerar(){
    this.velocidade = this.velocidade + 10;
    console.log (`A hyper velocidade do ${this.modelo} subiu pra ${this.velocidade}` )
}

freiar(){
    this.velocidade = this.velocidade - 5;
     console.log (`A hyper velocidade do ${this.modelo} caiu pra ${this.velocidade}` )
}
}

module.exports = Carro;
