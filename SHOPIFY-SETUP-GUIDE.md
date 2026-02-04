# Guía completa de configuración Shopify (Colombia)

## ✅ Productos ya importados desde Dropi
Has completado el primer paso: importar 20 productos. Ahora sigue esta guía paso a paso.

---

## 1. Configuración de pagos (Shopify Payments) 🔐

### Paso 1.1: Activar Shopify Payments
1. Shopify Admin → **Settings** → **Payments**
2. En **Shopify Payments** → **Complete account setup**
3. Información requerida:
   - Datos personales o de empresa
   - Documento de identidad (CC o NIT para Colombia)
   - Información bancaria (cuenta donde recibirás pagos)
   - Dirección comercial

### Paso 1.2: Métodos de pago adicionales (opcional)
- **PSE**: actívalo para transferencias bancarias locales
- **Efecty/Baloto**: si quieres recibir pagos en efectivo
- **PayPal**: configura como alternativa (Settings → Payments → Add payment method)

### Paso 1.3: Verificación
- Shopify enviará un depósito pequeño (1-2 días) para verificar la cuenta
- Confirma el monto en tu panel cuando llegue

---

## 2. Configuración de envíos para Colombia 🚚

### Paso 2.1: Zonas de envío
1. Settings → **Shipping and delivery**
2. **Shipping** → **Manage rates**
3. Crear zona "Colombia":
   - Name: Colombia
   - Countries: Colombia
   - Regions: seleccionar todas las regiones o las que cubras

### Paso 2.2: Tarifas de envío
**Opción A - Tarifa plana:**
- Clic en **Add rate**
- Name: "Envío estándar Colombia"
- Price: ej. 15000 COP
- Condition: ej. Gratis si pedido > 200000 COP

**Opción B - Por peso (si Dropi lo proporciona):**
- Add rate → Based on weight
- Define rangos (0-1kg: $X, 1-5kg: $Y, etc.)

**Opción C - Integración con transportadora:**
- Si usas Coordinadora/Servientrega/Interrapidísimo
- Apps → buscar integración (ej. "Coordinadora Shipping")

### Paso 2.3: Tiempo de entrega
- Edit shipping zone → Add delivery time
- Ej: "3-7 días hábiles"

---

## 3. Optimización de productos 📦

### Paso 3.1: Revisar cada producto
1. Products → selecciona un producto
2. **Título**: optimiza para SEO (incluye palabra clave principal)
   - ❌ Malo: "Producto 123"
   - ✅ Bueno: "Auriculares Bluetooth Inalámbricos con Cancelación de Ruido"

3. **Descripción**: mejora con estructura HTML:
   ```html
   <h3>Características principales</h3>
   <ul>
     <li>Batería de larga duración (30 horas)</li>
     <li>Cancelación activa de ruido</li>
     <li>Conexión Bluetooth 5.0</li>
   </ul>
   
   <h3>Especificaciones técnicas</h3>
   <p>Detalles técnicos...</p>
   ```

4. **Precio**: verifica margen sobre costo de Dropi
   - Costo Dropi: $X
   - Precio venta sugerido: Costo × 2 o 2.5 (50-60% margen)
   - Ej: Costo $50.000 → Venta $100.000-125.000

5. **Inventario**: Dropi sincroniza automáticamente, verifica que esté en "Track quantity"

6. **SEO**:
   - Scroll abajo → **Search engine listing preview**
   - Edit → mejora Title tag y Meta description
   - URL handle: que sea descriptivo (ej. `/auriculares-bluetooth-pro`)

### Paso 3.2: Imágenes
- Dropi ya trae imágenes, pero:
  - Verifica que sean de buena calidad
  - Reordena (la mejor primera)
  - Agrega imagen de lifestyle si tienes

### Paso 3.3: Tags
Agregar tags consistentes para filtros:
- Categoría: `electrónica`, `accesorios`, `audio`
- Estado: `nuevo`, `promoción`, `bestseller`
- Características: `inalámbrico`, `resistente-agua`

---

## 4. Crear colecciones 🗂️

### Paso 4.1: Colecciones automáticas
1. Products → **Collections** → **Create collection**
2. **Ejemplo 1 - Por categoría:**
   - Title: "Electrónica"
   - Type: Automated
   - Conditions: Product tag is equal to `electrónica`

3. **Ejemplo 2 - Ofertas:**
   - Title: "Ofertas"
   - Conditions: Product tag is equal to `promoción`

4. **Ejemplo 3 - Por precio:**
   - Title: "Menos de $50.000"
   - Conditions: Product price is less than 50000

### Paso 4.2: Colecciones principales sugeridas
- Todos los productos
- Novedades (últimos 30 días)
- Más vendidos (actualiza manual al inicio)
- Por categoría (electrónica, accesorios, etc.)
- Ofertas

---

## 5. Personalización del theme 🎨

### Paso 5.1: Seleccionar theme
1. Online Store → **Themes**
2. Si usas el theme por defecto (Dawn), está bien para empezar
3. O explora **Theme library** → themes gratis como:
   - Sense (minimalista)
   - Craft (productos destacados)
   - Studio (moderno)

### Paso 5.2: Personalizar
1. **Customize** theme
2. **Home page**:
   - Add section → Image banner (header con mensaje principal)
   - Add section → Featured collection (muestra productos destacados)
   - Add section → Multicolumn (beneficios: envío gratis, soporte, etc.)

3. **Header**:
   - Logo: sube tu logo (recomendado 200-300px ancho, PNG transparente)
   - Menu: crea menú de navegación (Navigation → Main menu)
     - Inicio
     - Productos (dropdown con colecciones)
     - Ofertas
     - Contacto

4. **Footer**:
   - Links: Políticas, FAQ, Contacto
   - Newsletter: activa para captar emails
   - Redes sociales: añade tus links

5. **Colores y fuentes**:
   - Theme settings → Colors
   - Elige paleta consistente con tu marca
   - Fonts: selecciona 2 fuentes (una para títulos, otra para texto)

### Paso 5.3: Páginas importantes
1. **Crear páginas** (Online Store → Pages → Add page):
   - **Sobre nosotros**: quién eres, misión
   - **Contacto**: formulario + info
   - **FAQ**: preguntas frecuentes sobre envío, devoluciones, etc.

---

## 6. Políticas legales 📜

### Paso 6.1: Generar políticas
1. Settings → **Policies**
2. Shopify genera plantillas automáticas, personalízalas:
   - **Refund policy** (Política de devoluciones)
   - **Privacy policy** (Política de privacidad)
   - **Terms of service** (Términos y condiciones)
   - **Shipping policy** (Política de envíos)

3. Revisa y adapta a Colombia (especialmente tiempos, costos, derecho a retracto)

### Paso 6.2: GDPR y cookies (opcional pero recomendado)
- Apps → busca "Cookie banner" (ej. Securly)
- Instala para cumplir con regulaciones

---

## 7. SEO básico y analítica 📊

### Paso 7.1: SEO general
1. Settings → **General**
2. **Store details**:
   - Home page title: "InnovatecJD - Electrónica y accesorios tech en Colombia"
   - Meta description: 160 caracteres atractivos

3. Online Store → **Preferences**:
   - Homepage title y meta description
   - Social sharing image (1200x630px)

### Paso 7.2: Google Analytics
1. Crea cuenta en Google Analytics (GA4)
2. Settings → **Apps and sales channels** → **Sales channels** → Online Store → Preferences
3. Google Analytics → pega tu ID (G-XXXXXXXXXX)

### Paso 7.3: Facebook Pixel (si usarás ads)
- Apps → Meta (Facebook) → instalar
- Conecta cuenta de Facebook Business
- Pixel se instala automáticamente

---

## 8. Configuración de dominio (opcional pero recomendado) 🌐

### Paso 8.1: Comprar dominio
- **Opción A**: Comprar en Shopify (Settings → Domains → Buy new domain)
- **Opción B**: Comprar externo (GoDaddy, Namecheap) y conectar

### Paso 8.2: Conectar dominio externo
1. Settings → Domains → **Connect existing domain**
2. Sigue las instrucciones (apuntar DNS A record y CNAME)
3. SSL se activa automáticamente (espera 24-48h)

---

## 9. Prueba de checkout ✅

### Paso 9.1: Pedido de prueba
1. Activa **Bogus Gateway** (Settings → Payments → Add manual payment → Bogus Gateway)
2. Abre tu tienda en navegador privado
3. Añade producto al carrito
4. Haz checkout completo
5. Verifica:
   - Proceso fluido
   - Emails automáticos llegaron
   - Pedido aparece en Orders

### Paso 9.2: Test con Shopify Payments
- Usa tarjeta de prueba (búsca "Shopify test cards" en ayuda)
- Verifica que todo funcione

---

## 10. Configuración de notificaciones 📧

### Paso 10.1: Emails automáticos
1. Settings → **Notifications**
2. Personaliza templates:
   - **Order confirmation** (confirmación de pedido)
   - **Shipping confirmation** (confirmación de envío)
   - **Order cancelled** (pedido cancelado)

3. Agrega logo y personaliza colores

### Paso 10.2: Notificaciones de inventario
- Si Dropi maneja stock, activa alertas de inventario bajo

---

## 11. Apps recomendadas (opcional) 🔌

### Esenciales:
- **Dropi** (ya instalada) - productos dropshipping
- **Tidio / Tawk.to** - chat en vivo gratis
- **Judge.me / Loox** - reseñas de productos
- **Klaviyo / Omnisend** - email marketing
- **SEO Manager** - optimización SEO automática

### Marketing:
- **Facebook & Instagram** - venta en redes
- **Google Channel** - Google Shopping

---

## 12. Lanzamiento 🚀

### Checklist final antes de lanzar:
- [ ] 20 productos importados y optimizados
- [ ] Shopify Payments configurado y verificado
- [ ] Envíos configurados para Colombia
- [ ] Colecciones creadas
- [ ] Theme personalizado (logo, colores, menú)
- [ ] Páginas legales (políticas) publicadas
- [ ] Dominio conectado (o usando .myshopify.com)
- [ ] Pedido de prueba realizado exitosamente
- [ ] Google Analytics instalado
- [ ] Notificaciones de email configuradas

### Remover protección de contraseña:
1. Online Store → **Preferences**
2. **Password protection** → Disable
3. **Save**

---

## 13. Post-lanzamiento 📈

### Primeros días:
- Monitorea pedidos diariamente
- Responde preguntas rápido (chat/email)
- Verifica que Dropi procese pedidos correctamente

### Primera semana:
- Añade reseñas (pide a amigos/primeros clientes)
- Crea contenido para redes sociales
- Configura campañas de email (bienvenida, carrito abandonado)

### Primer mes:
- Analiza Google Analytics (productos más vistos, tasa de conversión)
- Optimiza productos de bajo rendimiento
- Agrega más productos de Dropi si funcionan bien

---

## 🆘 Recursos de ayuda

- **Shopify Help Center**: https://help.shopify.com
- **Dropi soporte**: contacta vía su app
- **Comunidad Shopify**: https://community.shopify.com
- **YouTube**: busca "Shopify tutorial Colombia"

---

**¿Tienes dudas en algún paso específico?** Dime en cuál y te doy detalles más precisos. 🚀
