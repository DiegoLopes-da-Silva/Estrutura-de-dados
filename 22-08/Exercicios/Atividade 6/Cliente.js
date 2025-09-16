class Cliente{
    constructor(Nome, EnderecoC) {
        this.nome = Nome
        EnderecoC = require("./Endereco.js")
    }  
    
    apresentar() {console.log (`Me chamo ${this.nome} , moro na cidade ${this.cidade} da rua ${this.rua} no número ${this.numero}`)
    }
} 


module.exports = Cliente