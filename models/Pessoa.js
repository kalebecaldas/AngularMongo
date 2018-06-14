var mongoose = require('mongoose');


var PessoaSchema = new mongoose.Schema({
    login: String,
    senha: String,
    Nome: String,
    CPF: String,
    RG: String,
    Endereco: String,
    nMae: String,
  });

  module.exports = mongoose.model('Pessoa', PessoaSchema);

