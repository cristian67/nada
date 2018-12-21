const express = require('express');
const app = express();

const Producto = require('../models/categoria');

//Mostrar
app.get('/categorias', (req, res) => {

    return res.json({
        categoria: 'cristian desde categoria'
    });


});

module.exports = app;