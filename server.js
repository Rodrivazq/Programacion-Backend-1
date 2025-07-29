const express = require('express');
const app = express();
const productosRoutes = require('./routes/productos');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const PORT = 3000; // Puerto del servidor

// 🔧 Middlewares
app.use(cors());
app.use(express.json());

// 🖼 Servir archivos estáticos (frontend y uploads)
app.use(express.static(path.join(__dirname, 'public'))); // HTML, CSS, JS
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Imágenes

// 🔌 Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/tienda')
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error al conectar a MongoDB:', err));

// 🛣 Rutas
app.use('/productos', productosRoutes);

// 🚀 Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en 👉 http://localhost:${PORT}`);
});
