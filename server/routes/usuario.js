const express = require('express');
const app = express();

const Usuario = require('../models/usuario');

const bcrypt = require('bcryptjs');

const _ = require('underscore');

let { verificaToken } = require('../../server/middleware/autenticacion');



///========================
//  Mostrar Usuarios
//=========================
app.get('/usuario', verificaToken, (req, res) => {

    Usuario.find({ estado: true })
        .exec((err, usuarios) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            Usuario.count({ estado: true }, (err, conteo) => {
                res.json({
                    ok: true,
                    usuarios,
                    registros: conteo
                });
            });

        });

});


///========================
//  Actualizar Usuarios
//=========================
app.put('/usuario/:id', verificaToken, (req, res) => {
    //obtener id
    let id = req.params.id;
    //obtener body
    let body = _.pick(req.body, [
        'nombre',
        'email',
        'img',
        'role',
        'estado'
    ]);
    //Actualizar
    Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, usuarioDB) => {
        //error
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        //respuesta
        res.json({
            ok: true,
            usuario: usuarioDB
        });
    });


});


//=========================
//  Crear Usuarios
//=========================
app.post('/usuario', verificaToken, (req, res) => {

    let body = req.body;

    //Iniciarlizar Usuario
    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        rol: body.rol
    });

    //guardar en BD
    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        });
    });
});


//=========================
//  Borrar Usuarios
//=========================
app.delete('/usuario/:id', verificaToken, (req, res) => {

    let id = req.params.id;

    let cambiaEstado = {
        estado: false
    }

    Usuario.findByIdAndUpdate(id, cambiaEstado, { new: true }, (err, UsuarioBorrado) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        if (!UsuarioBorrado) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Usuario no registrado"
                }
            });
        }

        res.json({
            ok: true,
            usuario: UsuarioBorrado

        });
    });
});



module.exports = app;