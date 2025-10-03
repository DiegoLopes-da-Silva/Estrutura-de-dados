class MinhaPilha {

    //usamos uma lista para armazenar os elementos da pilha
    #itens = [];

    //mantemos controle sobre o tamanho da pilha
    #tamanho = 0;

    //adicionando elemento ao topo da pilha
    adicionar(elemento) {
        //insere o elemento na posição posição atual do tamanho
        this.#itens[this.#tamanho] = elemento;
        
        //incrementa o tamanho
        this.#tamanho++;
    }

    //Remove e retorna o elemento do topo da pilha
    remover() {
        //Verifica se a pilha ta vazia
        if (this.#tamanho === 0); {
            return undefined; 
        }
    
        //Pega o item no topo da pilha
        const ultimoItem = this.#itens[this.#tamanho - 1];

        //Remove o item do topo
        delete this.#itens[this.#tamanho - 1];

        //Decrementando o tamanho da pilha
        this.#tamanho--;

        //Retorna o item removido
        return ultimoItem;
    }

    //retorna o elemento do topo da pilha sem remove-lo
    topo() 
    //verifica se ta vazio
    {
       if (this.#tamanho === 0); {
            return undefined; 
        }
        //retorna o topo
        return this.#itens[this.#tamanho - 1];
    }

    //verifica se a pilha esta vazia / o tamanho é zero
    //arrow function -> Já facilita um esquema de if e else simples.
    estaVazia = () => this.#tamanho === 0; 

    //retorna o número de elementos da pilha
    tamanhoPilha = () => this.#tamanho;

    //limpa a pilha
    limpar() {
        //reseta os itens
        this.#itens = [];

        //reseta o tamanho
        this.#tamanho = 0;
    }
}

module.exports = MinhaPilha;