const Endereco = require("./Endereco.js");
const Cliente = require("./Cliente.js")

const CasaCliente = new Endereco("São Paulo", "Avenida fulano", "195")
const Fulano = new Cliente ("Ciclano", CasaCliente)
Fulano.apresentar()