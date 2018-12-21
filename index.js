require('./server/config/config');

const express = require('express');
const app = express();

const cors = require('cors');

const mongoose = require('mongoose');


const path = require('path');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());


//Cors para ser consumido sin problemas :)
app.use(cors());

// Config global de rutas
app.use(require('./server/routes/index'));

//conectar al cliente 
app.use(express.static(path.join(__dirname, 'client/build')))

// Conectar a BDD
mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;
    console.log("Conectado a BDD")
});


//Rutas de test
app.get('/api/productoss', (req, res) => {

    let productos = [{
            "id": 0,
            "nombre": "HTML5",
            "precio": 25,
            "imagen": "camisa_1",
            "descripcion": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
        },
        {
            "id": 1,
            "nombre": "CSS3",
            "precio": 25,
            "imagen": "camisa_2",
            "descripcion": "Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."
        }

    ]

    return res.json({
        productos
    })
});


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


// Levantar servicio
app.listen(process.env.PORT, () => {
    console.log(`Escuchando el puerto ${process.env.PORT}`)
});