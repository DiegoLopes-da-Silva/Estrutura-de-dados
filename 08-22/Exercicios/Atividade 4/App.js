const ContaBancaria = require (`./ContaBancaria.js`)


const conta1 = new ContaBancaria()

conta1.depositar(20)

conta1.sacar(10)

conta1.verSaldo()

const conta2 = new ContaBancaria()

conta2.depositar(20)

conta2.sacar(40)

conta2.verSaldo()
