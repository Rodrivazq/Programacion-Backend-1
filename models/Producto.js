const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  precio: Number,
  stock: Number,
  imagen: String // campo nuevo
}, { timestamps: true });

module.exports = mongoose.model('Producto', productoSchema);
