# Configurar GitHub Actions para Deploy Automático

Para que el workflow de deploy automático funcione, necesitas configurar dos **secrets** en GitHub:

## Pasos:

### 1. Obtener SHOPIFY_STORE_URL
Tu tienda: `innovatecjdsm.myshopify.com`

### 2. Obtener SHOPIFY_ADMIN_TOKEN

#### Opción A: Desde Shopify Admin (Recomendado)

1. Ve a tu Admin de Shopify → **Apps** → **App and sales channel settings**
2. Haz clic en **Develop apps**
3. Abre la app **"GitHub Deploy"** (o crea una si no existe)
4. En **Admin API access tokens**, copia el token
5. **Asegúrate que tenga estos permisos:**
   - ✅ `write_themes`
   - ✅ `read_themes`

#### Opción B: Desde Shopify CLI

```bash
shopify auth token
```

Esto te dará el token directamente en la terminal.

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
