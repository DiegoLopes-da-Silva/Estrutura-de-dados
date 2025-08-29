class Animal{
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log("O animal diz...");
    }
    
}

class Cachorro extends Animal {
    Falar() {
        console.log ('AU AU!');
    }
}

class Gato extends Animal {
    Falar() {
        console.log ('Miau...');
    }
}

module.exports = {Animal, Cachorro, Gato};
