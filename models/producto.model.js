const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    estado: { type: Boolean, default: true},
    nombre: { type: String, required: [true, 'Nombre obligatorio'], unique:true },
    precio: { type: String, required: [true, 'Nombre obligatorio'] },  
});

module.exports = model('Producto', ProductoSchema);