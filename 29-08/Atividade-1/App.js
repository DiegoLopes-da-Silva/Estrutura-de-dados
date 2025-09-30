const MeuArray = require('./MeuArray.js')


let Estudar = new MeuArray();
Estudar.adicionarTarefa("Matemática")
Estudar.adicionarTarefa("Português")
Estudar.adicionarTarefa("História")

console.log (Estudar.obterElemento(0))

console.log (Estudar.obterElemento(1))

console.log (Estudar.obterElemento(2))

console.log (`A quantidade de tarefas atualmente é de ${Estudar.tamanhoArray()}`)

Estudar.limpar()

Estudar.adicionarTarefa("Biologia")
Estudar.adicionarTarefa("Física")
Estudar.adicionarTarefa("Inglês")
Estudar.adicionarTarefa("Matemática")
console.log (`A quantidade de tarefas atualmente é de ${Estudar.tamanhoArray()}`)
Estudar.mostrarItems()
Estudar.remover()
Estudar.editar(0, "Química")
Estudar.obterIndice("Inglês")
Estudar.mostrarItems()


