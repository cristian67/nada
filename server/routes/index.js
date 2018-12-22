const express = require('express');
const app = express();

//============================
//  Rutas API
//============================
app.use('/api', require('./usuario'));
app.use('/api', require('./producto'));
app.use('/api', require('./categoria'));
app.use('/api', require('./login'))

/*subir archivos*/
app.use('/api', require('./upload'));



module.exports = app;