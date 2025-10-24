const Grafo = require ('./GrafoEx2.js')
const meuGrafo = new Grafo();
meuGrafo.adicionarVertice(1);
meuGrafo.adicionarVertice(2);
meuGrafo.adicionarVertice(3);
meuGrafo.adicionarVertice(4);
meuGrafo.adicionarAresta(1, 2, 5);
meuGrafo.adicionarAresta(1, 3, 4);
meuGrafo.adicionarAresta(1, 4, 5);
meuGrafo.adicionarAresta(2, 3, 4);
meuGrafo.adicionarAresta(2, 4, 3);
meuGrafo.adicionarAresta(3, 4, 2);
meuGrafo.imprimirGrafo();