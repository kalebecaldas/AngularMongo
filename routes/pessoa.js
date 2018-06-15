var express = require('express');
var router = express.Router();
var Pessoa = require('../models/Pessoa.js');

/* GET ALL PessoaS */
router.get('/', function(req, res, next) {
  Pessoa.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Pessoa BY ID */
router.get('/:id', function(req, res, next) {
  Pessoa.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/:id', function(req, res, next) {
  Pessoa.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Pessoa */
router.post('/', function(req, res, next) {
  Pessoa.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Pessoa */
router.put('/:id', function(req, res, next) {
  Pessoa.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Pessoa */
router.delete('/:id', function(req, res, next) {
  Pessoa.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/**
 * Testar validação cpf
 */
router.get('/bycpf/:cpf', (req, res, next) => {
  Pessoa.findOne({title: req.params.cpf}, (err, result) => {
    if (err) {
      console.error(err);
    }

    if (result) {
      res.send(true);
    }
    else {
      res.send(false);
    }

  })
})

module.exports = router;