var mongoose = require('mongoose');

Campo = {
  nome: String,
  valor: String,
};
var PessoaSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
    rg: String,
    endereco: String,
    mae: String,
    numContato: String,
    outros: Array(Campo)
  });

  module.exports = mongoose.model('Pessoa', PessoaSchema);

