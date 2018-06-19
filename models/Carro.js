var mongoose = require('mongoose');

Campo = {
  nome: String,
  valor: String,
};
var CarroSchema = new mongoose.Schema({
    marca: String,
    modelo: String,
    placa: String,
    proprietario: String,
    info: String,
    outros: Array(Campo),
  });

  module.exports = mongoose.model('Carro', CarroSchema);
  