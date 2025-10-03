const Endereco = require("./Endereco.js")

class Cliente{
    constructor(Nome, Endereco) {
        this.nome = Nome
        this.endereco = Endereco
    }  
    
    apresentar() {console.log (`Me chamo ${this.nome} , moro na cidade ${this.endereco.cidade} da rua ${this.endereco.rua} no número ${this.endereco.numero}`)
    }
} 


module.exports = Cliente