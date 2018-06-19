var mongoose = require('mongoose');

Outro = {
nome: String,
valor: String,
};
var CarroSchema = new mongoose.Schema({
    marca: String,
    modelo: String,
    placa: String,
    proprietario: String,
    info: String,
    outro: Outro,
    
  });

  module.exports = mongoose.model('Carro', CarroSchema);

