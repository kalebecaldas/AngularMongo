var express = require('express');
var router = express.Router();
var Carro = require('../models/Carro.js');

/* GET ALL CarroS */
router.get('/', function(req, res, next) {
  Carro.find(function (err, products) {
    if (err)
      return next(err);
    
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(products);
  });
});

/* GET SINGLE Carro BY ID */
router.get('/:id', function(req, res, next) {
  Carro.findById(req.params.id, function (err, post) {
    if (err) return next(err);

    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(post);
  });
});

/* SAVE Carro */
router.post('/', function(req, res, next) {
  Carro.create(req.body, function (err, post) {
    if (err) return next(err);
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(post);
  });
});

/* UPDATE Carro */
router.post('/:id', function(req, res, next) {
  Carro.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(post);
  });
});

/* DELETE Carro */
router.delete('/:id', function(req, res, next) {
  Carro.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(post);
  });
});

/**
 * Testar validação cpf
 */
router.get('/cpf/:cpf', (req, res, next) => {
  Carro.findOne({cpf: req.params.cpf}, (err, result) => {
    if (err) {
      console.error(err);
    }

    //res.setHeader('Access-Control-Allow-Origin', '*');

    if (result) {
      res.send(true);
    }
    else {
      res.send(false);
    }

  })
})

module.exports = router;