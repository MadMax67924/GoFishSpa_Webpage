// js/detalle.js
(function(){
  const qs = new URLSearchParams(window.location.search);
  const slug = qs.get('producto');
  const productos = window.PRODUCTS || [];
  const producto = productos.find(p => p.slug === slug);

  if (!producto) {
    document.getElementById('titulo-producto').textContent = 'Producto no encontrado';
    return;
  }

  // Poblar texto
  document.getElementById('titulo-producto').textContent = producto.nombre;
  document.getElementById('nombre').textContent = producto.nombre;
  document.getElementById('precio').textContent = `$ ${Number(producto.precio||0).toLocaleString('es-CL')}`;
  document.getElementById('descripcion').textContent = producto.descripcionCorta || '';

  // Lista de detalles
  const ul = document.getElementById('lista-detalles');
  (producto.detalles || []).forEach(d => {
    const li = document.createElement('li');
    li.textContent = d;
    ul.appendChild(li);
  });

  // Galería
  const imgPrincipal = document.getElementById('img-principal');
  const thumbs = document.getElementById('thumbnails');
  const imagenes = (producto.imagenes && producto.imagenes.length) ? producto.imagenes : ['img/placeholder.png'];

  imgPrincipal.src = imagenes[0];
  imgPrincipal.alt = `Imagen de ${producto.nombre}`;

  imagenes.forEach((src, idx) => {
    const btn = document.createElement('button');
    btn.className = 'thumb';
    btn.setAttribute('role', 'listitem');
    btn.setAttribute('aria-label', `Ver imagen ${idx + 1}`);
    btn.innerHTML = `<img src="${src}" alt="Vista ${idx + 1} de ${producto.nombre}" loading="lazy">`;
    btn.addEventListener('click', () => { imgPrincipal.src = src; });
    thumbs.appendChild(btn);
  });

  // Botón WhatsApp ya está en el HTML con el número fijo (sin mensaje)
})();
