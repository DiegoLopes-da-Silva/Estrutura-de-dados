class Pessoa{
    constructor(nome, idade, altura){
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    }
    apresentar(){
        console.log (`Olá, me chamo ${this.nome}, tenho ${this.idade} anos e minha altura é de ${this.altura} metros! Prazer em te conhecer`)
    }
}

module.exports = Pessoa;