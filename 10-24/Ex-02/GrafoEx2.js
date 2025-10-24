//ESSE GRAFO É PONDERADO (tem peso por distancia)

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
    adicionarAresta(vertice1, vertice2, largura) {
        if(!this.adjacencia[vertice1]) {
            this.adicionarVertice(vertice1);
        }
        
        if(!this.adjacencia[vertice2]) {
            this.adicionarVertice(vertice2);
        }

        this.adjacencia[vertice1].push(vertice2);
        this.adjacencia[vertice2].push(vertice1);
        this.adjacencia[vertice1].push(`-> |Distância: ${largura} Kms|`);
        this.adjacencia[vertice2].push(`-> |Distância: ${largura} Kms|`);
        
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

    calcularMenor() {
        for (let vertice in this.adjacencia) {
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

/* Explicação da I.A 

Dijkstra é um algoritmo g greedy (guloso) que encontra o menor caminho de um vértice de origem até todos os outros vértices de um grafo ponderado não negativo.

Aqui está o conceito por trás do algoritmo:

Inicialização:

Comece atribuindo um valor de infinito para a distância de todos os vértices, exceto o vértice de origem, que tem distância 0.

Crie um conjunto de vértices não visitados.

Escolha o vértice de menor distância:

A cada iteração, escolha o vértice não visitado com a menor distância acumulada (inicialmente, é o vértice de origem).

Esse vértice se torna "visitado" e você atualiza as distâncias dos seus vizinhos (arestas adjacentes).

Relaxação das arestas:

Para cada vizinho do vértice atual, calcule a distância acumulada (distância do vértice atual + peso da aresta).

Se essa distância for menor que a distância conhecida até o vizinho, atualize o valor da distância.

Repita:

Continue até que todos os vértices sejam visitados e você tenha encontrado o caminho de menor distância até cada um.
*/


/* CÓDIGO DIJSKRA 

 // Algoritmo de Dijkstra para encontrar o menor caminho
  dijkstra(origem) {
    // Distâncias iniciais: infinita para todos os vértices, exceto a origem
    const distancias = {};
    const visitados = new Set();
    const antecessores = {};
    
    for (let vertice in this.adjacencia) {
      distancias[vertice] = Infinity;
    }
    distancias[origem] = 0;

    while (Object.keys(visitados).length < Object.keys(this.adjacencia).length) {
      // Encontre o vértice não visitado com a menor distância
      let verticeAtual = null;
      let menorDistancia = Infinity;

      for (let vertice in distancias) {
        if (!visitados.has(vertice) && distancias[vertice] < menorDistancia) {
          menorDistancia = distancias[vertice];
          verticeAtual = vertice;
        }
      }

      // Se não houver vértices restantes a serem visitados, saia do loop
      if (verticeAtual === null) break;

      // Marque o vértice como visitado
      visitados.add(verticeAtual);

      // Atualize as distâncias dos vizinhos
      for (let vizinho of this.adjacencia[verticeAtual]) {
        let distancia = distancias[verticeAtual] + vizinho.peso;
        if (distancia < distancias[vizinho.vertice]) {
          distancias[vizinho.vertice] = distancia;
          antecessores[vizinho.vertice] = verticeAtual;
        }
      }
    }

    // Retorne as distâncias e o caminho
    return { distancias, antecessores };
  }

  // Função para reconstruir o caminho a partir da origem até o destino
  caminho(antecessores, destino) {
    let caminho = [];
    let vertice = destino;

    while (antecessores[vertice]) {
      caminho.unshift(vertice);
      vertice = antecessores[vertice];
    }
    caminho.unshift(vertice); // adiciona o vértice de origem
    return caminho;
  }

*/