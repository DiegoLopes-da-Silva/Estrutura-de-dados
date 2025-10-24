class Grafo {
    constructor() {
        //Estrutura para armazenar os vértices e suas conexões
        this.adjacencia = {};
        //Adjacencia = Tudo que tem aresta para um vértice
        // {} é equivalente de []
    }

    //Adiciona um novo vértice ao grafo
    adicionarVertice(vertice) {
        if(!this.adjacencia[vertice]) {
            this.adjacencia[vertice] = [];
        }
    }

    //Adiciona uma nova aresta entre dois vertices (Não dirigido)
    adicionarAresta(vertice1, vertice2) {
        if(!this.adjacencia[vertice1]) {
            this.adicionarVertice(vertice1);
        }
        
        if(!this.adjacencia[vertice2]) {
            this.adicionarVertice(vertice2);
        }

        this.adjacencia[vertice1].push(vertice2);
        this.adjacencia[vertice2].push(vertice1);
    }

    //Remove uma aresta entre dois vertices
    removerAresta(vertice1, vertice2) {
        this.adjacencia[vertice1] = this.adjacencia[vertice1].filter(v => v !== vertice2);
        this.adjacencia[vertice2] = this.adjacencia[vertice2].filter(v => v !== vertice1);   
    }

    //Remove um vertice e suas conexões
    removerVertice(vertice) {
        while (this.adjacencia[vertice]?.length) {
            const adjacente = this.adjacencia[vertice].pop();   
            this.removerAresta(vertice, adjacente);
        }
        delete this.adjacencia[vertice];
    }

    //Exibe o grafo
    imprimirGrafo() {
        for (let vertice in this.adjacencia) {
            console.log(`${vertice} -> ${this.adjacencia[vertice].join(', ')}`);
        }
    }


}    //Fim da classe grafo

//Exemplo de uso

/* const meuGrafo = new Grafo();
meuGrafo.adicionarVertice('A');
meuGrafo.adicionarAresta('A', 'B');
meuGrafo.adicionarAresta('A', 'C');
meuGrafo.adicionarAresta('A', 'D');
meuGrafo.imprimirGrafo(); */

// RETORNO
/* 
A -> B, C, D
B -> A
C -> A
D -> A */


module.exports = Grafo;