var mongoose = require('mongoose');


var UsuarioSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
    usuario: String,
    senha: String,
   
  });

  module.exports = mongoose.model('Usuario', UsuarioSchema);

