var express = require('express');
var router = express.Router();
var Usuario = require('../models/Usuario.js');

router.post('/', (req, res, next) => {
    Usuario.find({usuario: req.body['usuario'], senha: req.body['senha']}, (err, result) => {
        if (err) {
            console.error(err);
            return next(err);
        }

        if (result.length === 1) {
            res.json({
                usuario: result[0].usuario,
                nome: result[0].nome
            });
        } else {
            res.send(undefined);
        }
    })
});

module.exports = router;