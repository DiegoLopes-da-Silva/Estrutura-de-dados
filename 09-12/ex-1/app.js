const feitico = require ('./feitico.js');

const magias = new feitico;

magias.adicionar("Bola de Fogo");
magias.adicionar("Trovão");
magias.adicionar("Congelar");
magias.remover();
magias.topo();
magias.limpar();
magias.remover();
