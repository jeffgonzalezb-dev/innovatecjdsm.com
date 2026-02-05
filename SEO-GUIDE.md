# Guía SEO para tu tienda Shopify

## 📋 Checklist SEO para InnovatecJD

### 1. Meta Tags Globales ✅

Estos ya están configurados en `theme/layout/theme.liquid`:
- `<title>` - Título de la página
- `<meta name="description">` - Descripción (máx 160 caracteres)
- `<meta name="viewport">` - Responsive
- `<link rel="canonical">` - URL canónica

### 2. Optimizar por página

#### Página de inicio (Home)
- **Title:** "InnovatecJD - Electrónica y Accesorios de Calidad"
- **Description:** "Compra electrónica, accesorios y periféricos en InnovatecJD. Envío a Colombia. PayPal disponible."

#### Páginas de productos
- **Title:** "[Nombre producto] | InnovatecJD"
- **Description:** "[Descripción corta del producto] - Compra online en InnovatecJD"

#### Página de colecciones
- **Title:** "[Colección] | Compra en InnovatecJD"
- **Description:** "Explora nuestra colección de [nombre]. [Descripción breve]."

### 3. Estructura de URL

**Buenas prácticas:**
- ✅ URLs cortas y descriptivas
- ✅ Incluir palabras clave
- ✅ Usar guiones (-) para separar palabras
- ✅ Minúsculas

**Ejemplo:**
```
/products/auriculares-bluetooth-pro
/collections/accesorios-movil
/collections/perifericos
```

### 4. Headings (H1, H2, H3)

**Reglas:**
- 1 único H1 por página (el título principal)
- H2, H3 para subsecciones
- Incluir palabras clave naturalmente

**Ejemplo en producto:**
```html
<h1>Auriculares Bluetooth Pro - Cancelación de Ruido</h1>
<h2>Características principales</h2>
<h3>Batería de 30 horas</h3>
```

### 5. Imágenes y Alt Text

**Estructura:**
```html
<img 
  src="auriculares-001.jpg" 
  alt="Auriculares Bluetooth Pro con cancelación de ruido activa - Negro"
  title="Auriculares Bluetooth Pro"
>
```

**Tips:**
- Alt text descriptivo (máx 125 caracteres)
- Incluir palabras clave cuando sea natural
- Usar nombres de archivo descriptivos

### 6. Contenido y Palabras Clave

**Para cada producto:**
- Descripción detallada (100-200 palabras mínimo)
- Mencionar características principales
- Incluir palabras clave relacionadas

**Palabras clave para InnovatecJD:**
- "electrónica Colombia"
- "accesorios para celular"
- "periféricos de calidad"
- "compra online segura"
- "auriculares Bluetooth"
- etc.

### 7. Links Internos

**Estrategia:**
- Ligar productos relacionados
- Crear "También te puede interesar"
- Links a categorías relevantes

**Ejemplo:**
```html
<!-- En producto de auriculares -->
Ver más <a href="/collections/audio">productos de audio</a>
Accesorios relacionados: <a href="/products/cable-usb">cables</a>
```

### 8. Velocidad de carga

**Shopify optimiza automáticamente:**
- ✅ Compresión de imágenes
- ✅ CDN global
- ✅ Caché

**Qué puedes hacer:**
- Usar imágenes de buena calidad pero comprimidas
- No cargar scripts innecesarios
- Minimizar CSS/JS

### 9. Mobile Friendly

**Shopify ya es responsive, pero verifica:**
- Botones clicables (mín 44x44px)
- Texto legible (mín 16px en móvil)
- Navegación clara
- Sin pop-ups intrusivos

### 10. Structured Data (Schema)

Para mejores resultados en búsqueda, agrega schema.org:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Auriculares Bluetooth Pro",
  "description": "Auriculares inalámbricos con cancelación de ruido",
  "image": "https://innovatecjdsm.com/imagen.jpg",
  "brand": {
    "@type": "Brand",
    "name": "InnovatecJD"
  },
  "offers": {
    "@type": "Offer",
    "price": "149.90",
    "priceCurrency": "COP"
  }
}
</script>
```

---

## 🔍 Herramientas para auditar tu SEO

### Gratuitas:
1. **Google Search Console** (https://search.google.com/search-console)
   - Enviar sitemap
   - Ver errores de rastreo
   - Monitorear posiciones

2. **Google PageSpeed Insights** (https://pagespeed.web.dev)
   - Velocidad de carga
   - Optimizaciones

3. **Mobile-Friendly Test** (https://search.google.com/test/mobile-friendly)
   - Verificar mobile

4. **Schema.org Validator** (https://validator.schema.org)
   - Validar datos estructurados

---

## 📈 Plan de acción

### Semana 1:
- [ ] Optimizar título y descripción de homepage
- [ ] Agregar descriptions a todos los productos
- [ ] Verificar URLs descriptivas

### Semana 2:
- [ ] Agregar Schema.org a productos
- [ ] Crear content around your products
- [ ] Optimizar imágenes

### Semana 3:
- [ ] Registrar en Google Search Console
- [ ] Enviar sitemap
- [ ] Monitorear rankings

---

## 🎯 Meta Tags esenciales que YA están en tu theme:

```html
<!-- En theme/layout/theme.liquid -->
<title>{{ page_title }}</title>
<meta name="description" content="{{ page_description | escape }}">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="canonical" href="{{ canonical_url }}">
```

Shopify genera automáticamente `page_title` y `page_description` basado en:
- Nombre del producto/colección
- Descripción en Shopify Admin

---

## ✅ Próximas tareas:

1. **En Shopify Admin**, edita cada producto y agrega:
   - Descripción completa (100+ palabras)
   - Palabras clave naturales

2. **En Shopify Admin**, configura:
   - **Settings** → **Online Store** → **Preferences**
   - Title template y Meta description template

3. **Registro en Google Search Console**
   - Verificar dominio
   - Enviar sitemap

¿Necesitas ayuda con algo específico de SEO?
