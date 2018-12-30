require('./server/config/config');

const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
const bodyParser = require('body-parser');




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

//Cors para ser consumido sin problemas :)
app.use(cors());

// Conectar a BDD
mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;
    console.log("Conectado a BDD")
});

// Config global de rutas
app.use(require('./server/routes/index'));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
    return res.json({
        usuario: "awaonao"
    })
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);