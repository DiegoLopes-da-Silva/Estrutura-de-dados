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

    obterIndice(valor) { 
        //Percorrendo o array
        for(let i = 0; i < this.#tamanho; i++){
            //Verificando se o valor é igual ao elemento
            if(this.#items[i] == valor){
                return i; //Retornando o indice
            }
        }
        return -1
    }

    mostrarItems(){
        for(let i = 0; i < this.#tamanho; i++){

            console.log(this.#items[i]);
        }
    }
}

module.exports = MeuArray;