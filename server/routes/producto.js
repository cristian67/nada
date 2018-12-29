const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

const Producto = require('../models/producto');

let { verificaToken } = require('../../server/middleware/autenticacion');


//Filesystem para borrar sin problemas
const fs = require('fs');
//Path para manejar las rutas
const path = require('path');

// default options
app.use(fileUpload());

//===============================
//  Obtener Productos: Todos
//==============================
app.get("/producto", (req, res) => {

    Producto.find({ disponible: true })
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
                Producto.count({ disponible: true, categoria: id }, (err, conteo) => {
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
app.post("/:tipo", verificaToken, (req, res) => {
    
    let tipo = req.params.tipo;
    let body = req.body;
     //ERROR
     if (Object.keys(req.files).length == 0) {
        return res.status(400).json({
            ok: false,
            err: {
                messsage: "No se a encontrado archivo"
            }
        })
    }

     //VALIDAR EXTENSIONES
     let tiposValidos = ['producto'];
     if (tiposValidos.indexOf(tipo) < 0) {
         return res.status(400).json({
             ok: false,
             err: {
                 messsage: "tipos validos:" + tiposValidos.join(', ')
             }
         });
     }

    //VALIDAR EXTENSIONES
    let archivo = req.files.image;

     //Obtener el nombre del Archivo
     let nombreCortado = archivo.name.split('.');
     //obtener ultima posicion
     let extensionArchivo = nombreCortado[nombreCortado.length - 1];
 
     let extencionesValindas = ['png', 'jpg', 'gif', 'jpeg', 'JPG', 'PNG'];
     
     if (extencionesValindas.indexOf(extensionArchivo) < 0) {
        return res.status(400).json({
            ok: false,
            err: {
                messsage: "Extensiones permitidas:" + extencionesValindas.join(', '),
                ext: extensionArchivo
            }
        });
    }

    //CAMBIAR NOMBRE ARCHIVO
    let nombreArchivo = `${nombreCortado[0]}-${new Date().getSeconds()}-${new Date().getMilliseconds()}.${extensionArchivo}`;


     //SUBIR ARCHIVO Y GUARDAR
     archivo.mv(`client/public/upload/${tipo}/${nombreArchivo}`, (err) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

         //Validaciones
        let producto = new Producto({
            usuario: req.usuario._id,
            nombre: body.nombre,
            img:nombreArchivo,
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
            producto: productoBD,
            img: nombreArchivo
        });
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