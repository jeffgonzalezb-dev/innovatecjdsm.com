# Theme de Shopify - InnovatecJD

Este es el theme personalizado para la tienda de Shopify `innovatecjdsm.com`.

## Estructura del proyecto

```
theme/
├── config/              # Configuración del theme
│   └── settings_schema.json
├── layout/              # Layouts principales
│   └── theme.liquid
├── sections/            # Secciones reutilizables
│   └── banner.liquid
├── snippets/            # Componentes pequeños
│   ├── header.liquid
│   └── footer.liquid
├── assets/              # CSS, JS, imágenes
│   ├── style.css
│   └── script.js
├── templates/           # Plantillas de páginas
│   └── index.json
└── locales/             # Traducciones
    └── es.json
```

## Instalación local

### Requisitos
- Node.js 16+
- Shopify CLI

### Setup

```bash
# Instalar Shopify CLI
npm install -g @shopify/cli

# Authenticarse
shopify auth login

# Ver el theme en tiempo real
shopify theme dev --path=theme
```

## Desarrollo

Para hacer cambios al theme:

1. Edita los archivos en la carpeta `theme/`
2. Los cambios se sincronizarán automáticamente con `shopify theme dev`
3. Abre http://localhost:3000 para ver los cambios en vivo

## Deploy

Para deployer cambios a producción:

```bash
shopify theme push --path=theme
```

## Estructura de archivos

### Config
- `settings_schema.json` - Define los campos personalizables en el editor de Shopify

### Layout
- `theme.liquid` - Layout HTML principal de toda la tienda

### Sections
- Componentes modulares que pueden agregarse desde el editor de Shopify
- Incluyen su propio HTML, CSS y schema

### Snippets
- Componentes reutilizables (header, footer, etc.)
- Se incluyen con `{% render 'nombre' %}`

### Assets
- `style.css` - Estilos globales
- `script.js` - Scripts globales

### Templates
- `index.json` - Plantilla de homepage
- Pueden incluir sections dinámicamente

### Locales
- `es.json` - Traducciones al español
- Se usan con `{{ 'key' | t }}`

## Guía de estilo

### Nombres de clases CSS
- Usar BEM: `.bloque__elemento--modificador`
- Ejemplo: `.header__nav--active`

### Liquid
- Usar comillas simples en liquid: `{% if product.available %}`
- Indentar 2 espacios

### Variables de color
- Usar CSS variables definidas en `settings_schema.json`
- Referencia: `var(--primary-color)`

## Recursos útiles

- [Shopify Liquid Reference](https://shopify.dev/api/liquid)
- [Shopify Theme Development](https://shopify.dev/docs/themes)
- [Shopify CLI Commands](https://shopify.dev/docs/themes/tools/cli)

## Licencia

Proyecto privado para innovatecjdsm.com
