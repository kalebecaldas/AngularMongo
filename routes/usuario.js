var express = require('express');
var router = express.Router();
var Usuario = require('../models/Usuario.js');

/* GET ALL Usuarios */
router.get('/', function(req, res, next) {
  Usuario.find(function (err, products) {
    if (err)
      return next(err);
    
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(products);
  });
});

/* GET SINGLE Usuario BY ID */
router.get('/:id', function(req, res, next) {
  Usuario.findById(req.params.id, function (err, post) {
    if (err) return next(err);

    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(post);
  });
});

/* SAVE Usuario */
router.post('/', function(req, res, next) {
  Usuario.create(req.body, function (err, post) {
    if (err) return next(err);
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(post);
  });
});

/* UPDATE Usuario */
router.post('/:id', function(req, res, next) {
  Usuario.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(post);
  });
});

/* DELETE Usuario */
router.delete('/:id', function(req, res, next) {
  Usuario.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    //res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(post);
  });
});

/**
 * Testar validação cpf
 */
router.get('/cpf/:cpf', (req, res, next) => {
  Usuario.findOne({cpf: req.params.cpf}, (err, result) => {
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