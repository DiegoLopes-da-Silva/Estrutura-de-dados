class MeuArray {

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
        return this.#tamanho -1
    }

    limpar() {
       this.#items = []
       this.#tamanho = 0
       console.log ("Lista de tarefas limpa!")
    }

    editar(indice, valor){
        if (indice < 0 || indice > this.#tamanho){
            return undefined;
            //Caso seja negativo ou maior do que a lista atual, retorne não definido.
        }

        else {
        this.#items[indice] = valor
        console.log ("A matéria", indice ,"agora é" , valor)
        }
    }
/*
    obterIndice(valor) {
        if (this.#items[this.#tamanho] != valor) {
            this.#tamanho--
        }
        if (this.#items[this.#tamanho] = valor) {
            return this.#tamanho
        }
        if (this.#tamanho < 0) {
            return undefined
        }
    }
  */  
}

module.exports = MeuArray;