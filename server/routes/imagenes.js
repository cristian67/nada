const express = require('express');
const fs = require('fs');

const path = require('path');

let app = express();

app.get('/imagen/:tipo/:img', (req, res) => {

    let tipo = req.params.tipo;
    let img = req.params.img;


    let pathImg = `./upload/${ tipo }/${ img }`;


    let pathImagen = path.resolve(__dirname, `../../upload/${tipo}/${img}`);
    if (fs.existsSync(pathImagen)) {
        res.sendFile(pathImagen);
    } else {
        let noImage = path.resolve(__dirname, '../assets/no-image.jpg');

        //funcion magica para regresar contenido dependiendo del tipo de dato
        res.sendFile(noImage);


    }






});



module.exports = app;