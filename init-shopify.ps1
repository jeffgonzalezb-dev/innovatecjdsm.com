# Shopify CLI Shortcut Script
# Guarda este archivo como shopify.ps1 en tu carpeta de proyecto
# y ejecuta: . .\shopify.ps1 para cargar el alias

# Crear alias para shopify
Set-Alias shopify "C:\Users\Usuario\AppData\Roaming\npm\shopify.cmd"

Write-Host "✅ Alias 'shopify' creado. Puedes usar:" -ForegroundColor Green
Write-Host "   shopify auth login" -ForegroundColor Cyan
Write-Host "   shopify theme pull --path=theme" -ForegroundColor Cyan
