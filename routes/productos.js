const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');
const upload = require('../middleware/multerConfig');

//
// 📦 RUTAS PARA PRODUCTOS
//

// 🔍 Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (err) {
    console.error('❌ Error al obtener productos:', err);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

// ➕ Crear nuevo producto (con imagen)
router.post('/', upload.single('imagen'), async (req, res) => {
  try {
    const { nombre, descripcion, precio, stock } = req.body;
    const imagen = req.file ? req.file.filename : null;

    const nuevoProducto = new Producto({
      nombre,
      descripcion,
      precio,
      stock,
      imagen
    });

    const productoGuardado = await nuevoProducto.save();
    res.status(201).json(productoGuardado);
  } catch (err) {
    console.error('❌ Error al crear el producto:', err);
    res.status(400).json({ error: 'Error al crear el producto' });
  }
});

// ✏️ Actualizar un producto
router.put('/:id', upload.single('imagen'), async (req, res) => {
  try {
    const { nombre, descripcion, precio, stock } = req.body;
    const actualizacion = { nombre, descripcion, precio, stock };

    if (req.file) {
      actualizacion.imagen = req.file.filename;
    }

    const productoActualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      actualizacion,
      { new: true }
    );

    if (!productoActualizado) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json(productoActualizado);
  } catch (err) {
    console.error('❌ Error al actualizar producto:', err);
    res.status(400).json({ error: 'No se pudo actualizar el producto' });
  }
});

// 🗑️ Eliminar un producto
router.delete('/:id', async (req, res) => {
  try {
    const producto = await Producto.findByIdAndDelete(req.params.id);

    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json({ mensaje: '✅ Producto eliminado correctamente' });
  } catch (err) {
    console.error('❌ Error al eliminar el producto:', err);
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
});

module.exports = router;
