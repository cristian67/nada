const express = require('express');
const app = express();

const Categoria = require('../models/categoria');

let { verificaToken, verificaAdmin_Role } = require('../../server/middleware/autenticacion');


//===============================
//Mostrar las categorias (Todas)
//==============================
app.get('/categoria', (req, res) => {

    Categoria.find({})
        .sort('descripcion')
        .exec((err, categoriaDB) => {
            //Error Servicio de base de datos
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            //Respuesta correcta
            res.json({
                ok: true,
                categoria: categoriaDB
            });
        });

});

//==========================
//Buscar categoria por id
//==========================
app.get('/categoria/:id', (req, res) => {

    let id = req.params.id
    Categoria.findById(id, (err, categoriaDB) => {
        //Error Servicio de base de datos
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        // Error si no existe categoria
        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'No existe categoria'
                }
            });
        }
        //Respuesta correcta
        res.json({
            ok: true,
            categoria: categoriaDB
        });

    })

});



//==========================
//Crear una categoria
//==========================
app.post('/categoria', verificaToken, (req, res) => {

    let body = req.body;

    let categoria = new Categoria({
        descripcion: body.descripcion,
        usuario: req.usuario._id
    });

    //Guardad
    categoria.save((err, categoriaDB) => {
        //Error Servicio de base de datos
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        // Error si no existe categoria
        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'No existe categoria'
                }
            });
        }
        //Respuesta correcta
        res.json({
            ok: true,
            categoria: categoriaDB
        });
    });

});


//==========================
//Actualizar categoria
//==========================
app.put('/categoria/:id', verificaToken, (req, res) => {
    //obtener id
    let id = req.params.id;
    let body = req.body;

    //Objeto que se va a actualizar
    let desCategoria = {
        descripcion: body.descripcion
    };


    //Actualizar por id
    Categoria.findByIdAndUpdate(id, desCategoria, { new: true, runValidators: true }, (err, categoriaDB) => {
        //Error Servicio de base de datos
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        // Error si no existe categoria
        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        //respuesta
        res.json({
            ok: true,
            categoria: categoriaDB
        });
    });

});


//==========================
//Eliminar categoria
//==========================
app.delete('/categoria/:id', verificaToken, verificaAdmin_Role, (req, res) => {

    let id = req.params.id;

    Categoria.findByIdAndRemove(id, (err, categoriaDelete) => {
        //Error Servicio de base de datos
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        // Error si no existe categoria
        if (!categoriaDelete) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'el id no existe'
                }
            });
        }
        //Respuesta borrado
        res.json({
            ok: true,
            message: 'categoria borrada'
        });

    })
});


module.exports = app;