var mongoose = require('mongoose');


var PessoaSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
    rg: String,
    endereco: String,
    mae: String,
  });

  module.exports = mongoose.model('Pessoa', PessoaSchema);

