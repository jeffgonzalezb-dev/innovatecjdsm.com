# Conectar GitHub con Shopify - Guía rápida

## 🎯 Objetivo
Versionar tu theme de Shopify en GitHub y automatizar el deploy cada vez que hagas cambios.

---

## Paso 1: Instalar Shopify CLI 🔧

### En Windows (PowerShell):
```powershell
npm install -g @shopify/cli @shopify/theme
```

### Verificar instalación:
```powershell
shopify version
```

---

## Paso 2: Autenticar con Shopify 🔐

```powershell
shopify auth login
```

Esto abrirá el navegador para autorizar. Selecciona tu tienda.

---

## Paso 3: Descargar tu theme actual 📥

Desde la raíz del repo:

```powershell
cd c:\Users\Usuario\Documents\GitHub\innovatecjdsm.com
shopify theme pull --path=theme
```

Esto descargará todos los archivos de tu theme activo a la carpeta `theme/`.

---

## Paso 4: Crear secrets en GitHub 🔑

### 4.1: Obtener API credentials de Shopify
1. En Shopify Admin → **Apps** → **App and sales channel settings**
2. **Develop apps** → **Create an app**
3. Nombre: "GitHub Deploy"
4. **Configure Admin API scopes**:
   - `write_themes`
   - `read_themes`
5. **Install app** → copiar **Admin API access token**

### 4.2: Añadir secrets a GitHub
1. Ve a tu repo: https://github.com/jeffgonzalezb-dev/innovatecjdsm.com
2. **Settings** → **Secrets and variables** → **Actions**
3. **New repository secret**:
   - Name: `SHOPIFY_CLI_THEME_TOKEN`
   - Value: [el access token copiado]
4. **New repository secret**:
   - Name: `SHOPIFY_SHOP`
   - Value: `tu-tienda.myshopify.com` (reemplaza con tu URL)

---

## Paso 5: Commitear el theme 💾

```powershell
git add theme/ .github/workflows/shopify-deploy.yml
git commit -m "feat: add Shopify theme and GitHub Actions deploy workflow"
git push
```

---

## Paso 6: Probar el deploy automático ✅

Haz un pequeño cambio en el theme:

```powershell
# Edita un archivo, por ejemplo:
notepad theme/sections/header.liquid
# Haz un cambio pequeño y guarda

git add theme/
git commit -m "test: update header"
git push
```

Ve a **Actions** en GitHub y verás el deploy ejecutándose.

---

## 🔄 Workflow automático

Con esta configuración:
- ✅ Cada push a `main` o `Mi-primer-proyecto` que modifique archivos en `theme/` → deploy automático
- ✅ Puedes ejecutar manualmente desde Actions → "Shopify Theme Deploy" → Run workflow

---

## 📁 Estructura esperada

```
innovatecjdsm.com/
├── .github/
│   └── workflows/
│       └── shopify-deploy.yml    ← GitHub Actions workflow
├── theme/                         ← Tu theme de Shopify
│   ├── assets/
│   ├── config/
│   ├── layout/
│   ├── sections/
│   ├── snippets/
│   └── templates/
├── products-template.csv
├── README.md
└── ...
```

---

## ⚠️ Importante

- **NO** subas credenciales al repo (usa secrets)
- El workflow solo se activa si hay cambios en `theme/`
- Puedes crear branches para probar cambios antes de mergear a producción

---

## 🆘 Troubleshooting

### Error: "Shopify CLI not found"
- Asegúrate de haber instalado: `npm install -g @shopify/cli @shopify/theme`
- Reinicia PowerShell

### Error: "Permission denied"
- Verifica que los secrets estén correctamente configurados en GitHub
- Verifica que el token tenga scopes `write_themes` y `read_themes`

### El deploy no se ejecuta
- Ve a Actions en GitHub y revisa los logs
- Verifica que el push incluyó cambios en `theme/`

---

¿Listo para empezar? Ejecuta el **Paso 1** y avísame cuando lo completes. 🚀
