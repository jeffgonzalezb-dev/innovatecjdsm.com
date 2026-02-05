# Google Analytics Setup - InnovatecJD

## 🎯 Qué es Google Analytics

Google Analytics te permite:
- 👥 Ver cuántas personas visitan tu tienda
- 📊 Qué productos ven más
- 💰 Cuánto dinero ganan en ventas
- 📱 Si vienen de móvil o escritorio
- 🔍 Cómo llegan (Google, redes sociales, etc.)

---

## 📋 Paso 1: Crear cuenta en Google Analytics

1. Ve a: https://analytics.google.com
2. Haz clic en **"Crear una cuenta"**
3. Completa:
   - **Nombre de la cuenta:** InnovatecJD
   - **Nombre de la propiedad:** innovatecjdsm.com
   - **Zona horaria:** America/Bogota (Colombia)
   - **Moneda:** COP (Peso Colombiano)
4. Haz clic en **"Crear"**

---

## 📋 Paso 2: Obtener el código de seguimiento

1. Una vez creada la propiedad, ve a **Admin** (engranaje abajo izquierda)
2. En la columna central, haz clic en **"Streams"** (Flujos de datos)
3. Haz clic en tu sitio web
4. Copia el **"Measurement ID"** (empieza con G-)
   - Ejemplo: `G-XXXXXXXXXX`

**Este código ya está agregado a tu theme automáticamente.**

---

## 🔧 Código de Google Analytics en tu Theme

Ya está incluido en `theme/layout/theme.liquid`:

```liquid
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id={{ settings.google_analytics_id }}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '{{ settings.google_analytics_id }}');
</script>
```

---

## 📋 Paso 3: Agregar el Measurement ID a Shopify

1. Ve a tu **Shopify Admin** → **Online Store** → **Preferences**
2. Busca **"Google Analytics"** o **"Measurement ID"**
3. Pega tu ID: `G-XXXXXXXXXX`
4. Haz clic en **"Save"**

**Shopify inyectará automáticamente el código de seguimiento.**

---

## ✅ Verificar que funciona

1. Vuelve a Google Analytics
2. Ve a **Real-time** → **Overview**
3. Abre tu tienda en otra pestaña: https://innovatecjdsm.com
4. Deberías ver **1 usuario activo** en Google Analytics

Si lo ves, ¡está funcionando! 🎉

---

## 📊 Métricas importantes a monitorear

### Tráfico general:
- **Users:** Usuarios únicos
- **Sessions:** Sesiones (visitas)
- **Pageviews:** Páginas vistas
- **Bounce Rate:** % que se van sin hacer nada

### Comportamiento:
- **Top Pages:** Páginas más vistas
- **Top Products:** Productos más vistos
- **Time on Page:** Tiempo promedio

### Conversión:
- **Transactions:** Pedidos realizados
- **Revenue:** Dinero generado
- **Conversion Rate:** % que compran

### Tráfico:
- **Source/Medium:** De dónde vienen los usuarios
  - `google / organic` = Búsqueda de Google
  - `direct / (direct)` = Acceso directo
  - `social / ...` = Redes sociales
  - `email / ...` = Email

---

## 🎯 Segmentación por dispositivo

**En Google Analytics:**
1. Ve a **Reports** → **Tech** → **Devices**
2. Verás cuántas personas usan:
   - 📱 Mobile (celular)
   - 💻 Desktop (escritorio)
   - 📱 Tablet (tablet)

**Tip:** Si >60% es mobile, tu tema debe ser muy mobile-friendly.

---

## 📈 Configurar alertas

Para saber si algo anda mal:

1. Ve a **Admin** → **Alerts**
2. Haz clic en **"Create alert"**
3. Ejemplo de alerta útil:
   - **Condición:** Sessions caen 50% comparado con semana anterior
   - **Notificación:** Email a tu correo

---

## 💡 Tips para aumentar tráfico

1. **SEO:** Optimizar palabras clave
2. **Redes sociales:** Publicar en Instagram, TikTok
3. **Email marketing:** Construir lista de suscriptores
4. **Ads:** Google Ads o Facebook Ads
5. **Content:** Crear blog posts relevantes

---

## 🔗 Dashboard recomendado

Crea un dashboard personalizado con:
- Users (hoy vs ayer)
- Revenue (hoy vs semana)
- Top 5 productos
- Traffic source pie chart
- Device breakdown

**En Google Analytics:**
1. Ve a **Dashboards**
2. Haz clic en **"Create"**
3. Agrega las métricas que quieras

---

## 🚨 Privacidad

**Importante para Colombia:**
- ✅ Necesitas aceptar cookies de analytics
- ✅ Mostrar política de privacidad
- ✅ Avisar a usuarios que estás rastreando

Ya lo tienes en [SEO-GUIDE.md](SEO-GUIDE.md) - Política de privacidad configurada.

---

## ¿Preguntas frecuentes?

**P: ¿Cuándo veo datos?**
R: Google Analytics puede tardar 24-48 horas en mostrar datos completos.

**P: ¿Los datos son en tiempo real?**
R: Sí, la sección "Real-time" muestra datos en vivo (con retraso de segundos).

**P: ¿Puedo ver conversiones?**
R: Sí, ve a **Reports** → **Conversions** (necesita configuración adicional).

**P: ¿Cómo sé qué cambios funcionan?**
R: Compara datos semana a semana. Si ves aumento de usuarios, algo está bien.

---

## ✅ Checklist Analytics

- [ ] Cuenta Google Analytics creada
- [ ] Measurement ID agregado a Shopify
- [ ] Código de seguimiento activo
- [ ] Verificado en Real-time
- [ ] Dashboard personalizado creado
- [ ] Alertas configuradas
- [ ] Política de privacidad actualizada
