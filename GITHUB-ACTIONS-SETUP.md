# Configurar GitHub Actions para Deploy Automático

Para que el workflow de deploy automático funcione, necesitas configurar **dos secrets** en GitHub:

## Pasos:

### 1. Obtener SHOPIFY_STORE_URL
Tu tienda: `innovatecjdsm.myshopify.com`

### 2. Obtener SHOPIFY_ADMIN_TOKEN

**Opción recomendada: Desde el Dev Dashboard**

1. Ve a tu Shopify Admin → **Apps** → **Develop apps**
2. Haz clic en **GitHub Deploy** (tu app)
3. Busca la sección **"Admin API access tokens"**
4. Copia el token (comienza con `shpat_`)

**Nota:** Si no ves esa sección, contáctanos para ayuda.

---

## Agregar Secrets en GitHub

1. Ve a tu repositorio en GitHub: https://github.com/jeffgonzalezb-dev/innovatecjdsm.com
2. Ve a **Settings** → **Secrets and variables** → **Actions**
3. Haz clic en **New repository secret**
4. Agrega dos secrets:

   **Secret 1:**
   - Name: `SHOPIFY_STORE_URL`
   - Value: `innovatecjdsm.myshopify.com`
   
   **Secret 2:**
   - Name: `SHOPIFY_ADMIN_TOKEN`
   - Value: (Tu token de Shopify Admin API)

5. Haz clic en **Add secret**

---

## Verificar que funciona

1. Una vez agregados los secrets, haz un cambio en la carpeta `theme/`
2. Haz commit y push a la rama principal
3. Ve a GitHub → **Actions**
4. Deberías ver un workflow ejecutándose
5. Si todo está bien, verás un ✅ verde

---

## Solución de problemas

**Si el workflow falla:**

1. Verifica que el token tenga los permisos correctos
2. Asegúrate que `SHOPIFY_STORE_URL` sea exactamente `innovatecjdsm.myshopify.com`
3. Revisa los logs en GitHub → **Actions** para más detalles

---

## Próximos pasos

Una vez configurado:
- ✅ Cualquier cambio en `theme/` se desplegará automáticamente
- ✅ El workflow solo ejecuta en cambios a la carpeta `theme/`
- ✅ Se ejecuta en la rama principal (`main` o `Mi-primer-proyecto`)
