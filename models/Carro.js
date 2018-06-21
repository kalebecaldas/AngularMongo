var mongoose = require('mongoose');

Campo = {
  nome: String,
  valor: String,
};
var CarroSchema = new mongoose.Schema({
    marca: String,
    modelo: String,
    placa: String,
    cor: String,
    proprietario: String,
    telContato: String,
    status: String,
    outros: Array(Campo),
  });

  module.exports = mongoose.model('Carro', CarroSchema);
  