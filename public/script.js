const form = document.getElementById('formulario-producto');
const lista = document.getElementById('lista-productos');

let modoEdicion = false;
let idProductoEditar = null;

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const url = modoEdicion ? `/productos/${idProductoEditar}` : '/productos';
  const method = modoEdicion ? 'PUT' : 'POST';

  const res = await fetch(url, {
    method,
    body: formData
  });

  if (res.ok) {
    form.reset();
    modoEdicion = false;
    idProductoEditar = null;
    form.querySelector('button').textContent = 'Agregar producto';
    cargarProductos();
  } else {
    alert('Error al guardar el producto');
  }
});

async function cargarProductos() {
  lista.innerHTML = '';
  const res = await fetch('/productos');
  const productos = await res.json();

  productos.forEach(p => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${p.nombre}</h3>
      <p>${p.descripcion}</p>
      <p>Precio: $${p.precio}</p>
      <p>Stock: ${p.stock}</p>
      ${p.imagen ? `<img src="/uploads/${p.imagen}" width="150">` : ''}
      <br>
      <button onclick="editarProducto('${p._id}', \`${p.nombre}\`, \`${p.descripcion}\`, ${p.precio}, ${p.stock})">Editar</button>
      <button onclick="eliminarProducto('${p._id}')">Eliminar</button>
      <hr>
    `;
    lista.appendChild(div);
  });
}

function editarProducto(id, nombre, descripcion, precio, stock) {
  form.nombre.value = nombre;
  form.descripcion.value = descripcion;
  form.precio.value = precio;
  form.stock.value = stock;

  modoEdicion = true;
  idProductoEditar = id;
  form.querySelector('button').textContent = 'Actualizar producto';
}

async function eliminarProducto(id) {
  const confirmar = confirm('¿Estás seguro de que querés eliminar este producto?');
  if (!confirmar) return;

  try {
    const res = await fetch(`/productos/${id}`, {
      method: 'DELETE'
    });

    if (res.ok) {
      alert('Producto eliminado con éxito');
      cargarProductos();
    } else {
      alert('Error al eliminar el producto');
    }
  } catch (error) {
    alert('Hubo un error en la conexión');
    console.error(error);
  }
}

cargarProductos();