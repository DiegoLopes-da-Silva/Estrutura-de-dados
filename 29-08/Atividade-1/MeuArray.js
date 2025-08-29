class MeuArray {

    #tarefa = 0;
    #items = [];
    #tamanho = 0;
   
    
    adicionarTarefa(elemento) { 
        this.#items[this.#tamanho] = elemento;

        this.#tamanho++;
    }
    
    remover() { 
        const ultimoitem = this.#items[this.#tamanho - 1]
        delete this.#items[this.#tamanho - 1]
        console.log (`A tarefa ${ultimoitem} foi removida da lista`)

        this.#tamanho --;
    }
    
    obterElemento(indice) { 
        if (indice < 0 || indice >= this.#tamanho){
            return undefined;
            //Caso seja negativo ou maior do que a lista atual, retorne não definido.
        }

        else {
        return this.#items[indice]
        }
    }
    
    tamanhoArray() { 

    }

    limpar() {

    }

    editar(indice, valor){

    }

    obterIndice(valor) {

    }
    
}

module.exports = MeuArray;