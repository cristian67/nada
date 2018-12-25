const express = require('express');
const app = express();

const Producto = require('../models/producto');

let { verificaToken } = require('../../server/middleware/autenticacion');



//===============================
//  Obtener Productos: Todos
//==============================
app.get("/producto", (req, res) => {

    let desde = req.query.desde || 0;
    desde = Number(desde);

    Producto.find({ disponible: true })
        .skip(desde)
        .limit(5)
        .exec((err, productos) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                productos
            });


        })

});


//========================================
//  Obtener Productos por categoria: Todos
//========================================
app.get("/:categoria_id/productos", (req, res) => {

    let id = req.params.categoria_id

    Producto.find({ categoria: id})
            .exec((err, productos) => {
                if (err) {
                    return res.status(400).json({
                        ok: false,
                        err
                    });
                }
                Producto.count({ disponible: true }, (err, conteo) => {
                    res.json({
                        ok: true,
                        productos,
                        registros: conteo
                    });
                });

            });

});


//===============================
//  Obtener Productos: id
//==============================
app.get("/producto/:id", (req, res) => {
    let id = req.params.id;

    Producto.findById(id)
        .populate({ path: 'categoria', select: 'descripcion' })
        .exec((err, productoDB) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            if (!productoDB) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'ID no existe'
                    }
                });
            }

            res.json({
                ok: true,
                producto: productoDB
            });

        });

});


//===============================
//  Crear producto
//==============================
app.post("/producto", verificaToken, (req, res) => {
    let body = req.body;

    //Validaciones
    let producto = new Producto({
        usuario: req.usuario._id,
        nombre: body.nombre,
        precioUni: body.precioUni,
        descripcion: body.descripcion,
        disponible: body.disponible,
        categoria: body.categoria
    });

    //Guardad
    producto.save((err, productoBD) => {
        //Error Servicio de base de datos
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        //Respuesta correcta
        res.status(201).json({
            ok: true,
            producto: productoBD
        });
    });

});


//===============================
//  Modificar producto
//==============================
app.put("/producto/:id", verificaToken, (req, res) => {
    //obtener id
    let id = req.params.id;
    let body = req.body;

    //Objeto que se va a actualizar
    let desProducto = {
        nombre: body.nombre,
        precioUni: body.precioUni,
        descripcion: body.descripcion,
        disponible: body.disponible,
        categoria: body.categoria
    };


    //Actualizar por id
    Producto.findByIdAndUpdate(id, desProducto, { new: true, runValidators: true }, (err, productoBD) => {
        //Error Servicio de base de datos
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        // Error si no existe categoria
        if (!productoBD) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El producto no existe'
                }
            });
        }
        //respuesta
        res.json({
            ok: true,
            producto: productoBD
        });
    });

});


//===============================
//  Eliminar Producto
//==============================
app.delete("/producto/:id", verificaToken, (req, res) => {

    //Obtener id
    let id = req.params.id;

    //Variable que cambia el estado
    let cambiaEstado = {
        disponible: false
    }

    //Deshabilitar producto
    Producto.findByIdAndUpdate(id, cambiaEstado, { new: true }, (err, productoNoDisponible) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        if (!productoNoDisponible) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Producto no registrado"
                }
            });
        }

        res.json({
            ok: true,
            producto: productoNoDisponible
        });
    });

});


module.exports = app;