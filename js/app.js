// js/app.js
(function(){
  const contenedor = document.getElementById('grid-catalogo');
  if (!contenedor || !window.PRODUCTS) return;

  window.PRODUCTS.forEach(p => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('data-slug', p.slug);

    const imgSrc = (p.imagenes && p.imagenes.length) ? p.imagenes[0] : 'img/placeholder.png';

    card.innerHTML = `
      <img src="${imgSrc}" alt="${p.nombre}" loading="lazy">
      <h3>${p.nombre}</h3>
      <p class="price">$ ${Number(p.precio || 0).toLocaleString('es-CL')}</p>
      <button class="btn-detalle" aria-label="Ir al detalle de ${p.nombre}">Ir al detalle</button>
    `;

    const btn = card.querySelector('.btn-detalle');
    btn.addEventListener('click', () => {
      window.location.href = `detalle.html?producto=${encodeURIComponent(p.slug)}`;
    });

    contenedor.appendChild(card);
  });
})();
