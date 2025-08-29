const MeuArray = require('./MeuArray.js')


let Estudar = new MeuArray();
Estudar.adicionarTarefa("Matemática")
Estudar.adicionarTarefa("Português")
Estudar.adicionarTarefa("História")

console.log (Estudar.obterElemento(0))

console.log (Estudar.obterElemento(1))

console.log (Estudar.obterElemento(2))
