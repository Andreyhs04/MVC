const express = require('express');
const Calculadora = require('../Model/calculo');
const resultado = express.Router();

resultado.post('/', (req, res) => {
    const { numero } = req.body; 
    const raizQuadrada = Calculadora.Raiz(parseFloat(numero));
    res.send(`A raiz quadrada é: ${raizQuadrada}`);
});

module.exports = resultado;