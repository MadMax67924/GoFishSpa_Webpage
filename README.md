# Sitio estático — Opción A

Este paquete contiene una implementación lista para usar con:

- Botón **"Ir al detalle"** en todas las cards del catálogo.
- Página de **detalle de producto** con galería y ficha.
- **Botón de WhatsApp** que **solo redirige** al chat del número configurado (sin mensaje prellenado): `https://wa.me/56963365895`.
- **Sin barra de búsqueda** (no incluida y además oculta por CSS si existiera).

## Estructura

```
sitio_opcion_A/
├─ index.html          → catálogo (cards generadas desde `data/products.js`)
├─ detalle.html        → detalle del producto (galería + WhatsApp)
├─ css/styles.css      → estilos base
├─ js/app.js           → render del catálogo
├─ js/detalle.js       → lógica del detalle
├─ data/products.js    → datos de productos (edítalo)
└─ img/placeholder.png → imagen temporal
```

## Cómo usar
1. **Abre `index.html`** en tu navegador (doble clic) para ver el catálogo.
2. **Edita `data/products.js`** y añade/ajusta tus productos:
   - `slug`: identificador único (sin espacios).
   - `nombre`, `precio`, `descripcionCorta`.
   - `detalles`: lista de strings.
   - `imagenes`: rutas de tus imágenes (por ejemplo, `img/taladro-1.jpg`).
3. **Agrega tus imágenes** dentro de la carpeta `img/` y referencia esos archivos en `imagenes`.
4. En producción, sube todo el contenido del directorio a tu hosting.

## WhatsApp
- El botón en `detalle.html` apunta a **`https://wa.me/56963365895`**.
- Si necesitas cambiar el número, edita el `href` del enlace en `detalle.html`.

## Personalizaciones rápidas
- Para ocultar/mostrar elementos, edita `css/styles.css`.
- Para cambiar textos o formatos, revisa `js/app.js` y `js/detalle.js`.

## Accesibilidad
- Imágenes con `alt`, botones con `aria-label`, y estructura semántica básica.

---
Hecho con cariño para desplegar rápido. ✨
