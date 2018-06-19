var mongoose = require('mongoose');
Outro = {
  nome: String,
  valor: String,
  };

var PessoaSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
    rg: String,
    endereco: String,
    mae: String,
    outro: Outro,
  });

  module.exports = mongoose.model('Pessoa', PessoaSchema);

