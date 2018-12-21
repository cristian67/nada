const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let categoriaSchema = new Schema({
    descripcion: { type: String, unique: true, required: [true, 'La descripción es obligatoria'] },
    img: { type: String, required: false },
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' }
});


module.exports = mongoose.model('Categoria', categoriaSchema);