# 🛒 Sistema de Gestión de Productos

Proyecto desarrollado como parte del curso de Programación Backend. Permite administrar productos con funcionalidades CRUD completas (Crear, Leer, Actualizar y Eliminar), incluyendo subida y visualización de imágenes.

---

## 🚀 Tecnologías Utilizadas

- **Node.js**
- **Express**
- **MongoDB** con Mongoose
- **Multer** para manejo de imágenes
- **HTML, CSS, JavaScript** (Frontend básico)
- **Postman** (para testeo de API)

---

## 📁 Estructura del Proyecto

```
tienda-backend/
├── models/
│   └── Producto.js
├── routes/
│   └── productos.js
├── middleware/
│   └── multerConfig.js
├── public/
│   ├── index.html
│   ├── script.js
│   └── styles.css
├── uploads/
│   └── (Imágenes subidas)
├── server.js
└── package.json
```

---

## 🔧 Instalación y Ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/tu_usuario/tienda-backend.git
cd tienda-backend
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear la carpeta para las imágenes:

```bash
mkdir uploads
```

4. Ejecutar el servidor:

```bash
node server.js
```

> El servidor corre en `http://localhost:3000`

---

## 🌐 Interfaz de Usuario

Accedé desde tu navegador a:

```
http://localhost:3000
```

Desde ahí podrás:
- Agregar productos con imagen
- Ver listado de productos
- Editar productos (desde la interfaz)
- Eliminar productos

---

## 🧪 Testeo con Postman

Podés probar las rutas directamente desde Postman:

- `GET /productos` → Obtener productos
- `POST /productos` → Crear producto con imagen (form-data)
- `PUT /productos/:id` → Editar producto
- `DELETE /productos/:id` → Eliminar producto

---

## ✅ Estado del Proyecto

✔️ CRUD funcional completo  
✔️ Subida y visualización de imágenes  
✔️ Interfaz básica desde `index.html`  
✔️ Separación en módulos (modelo, rutas, middleware)

---

## 📸 Capturas de Pantalla *(opcional)*

(Podés agregar imágenes de ejemplo del formulario o del listado de productos si querés sumar presentación)

---

## 📌 Autor

**Rodrigo Vázquez**  
Proyecto final de curso - 2025