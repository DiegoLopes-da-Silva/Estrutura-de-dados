const {Funcionario , Desenvolvedor , Gerente} = require("./Funcionario.js")

const FuncionarioQ1 = new Funcionario("Fulano", 30)
FuncionarioQ1.calcularBonus(30)
FuncionarioQ1.mostrarValor()

const Desenvolvedor1 = new Desenvolvedor("Ciclano", 50)
Desenvolvedor1.calcularBonus(50)
Desenvolvedor1.mostrarValor()

const Gerente1 = new Gerente("Beltrano", 60)
Gerente1.calcularBonus(60)
Gerente1.mostrarValor()