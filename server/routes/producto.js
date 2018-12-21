const express = require('express');
const app = express();

const Producto = require('../models/producto');


//Mostrar
app.get('/productos', (req, res) => {


    return res.json({
        producto: 'cristian desde producto'
    });


});

module.exports = app;