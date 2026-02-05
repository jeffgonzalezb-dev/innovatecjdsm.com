// Script principal para InnovatecJD

document.addEventListener('DOMContentLoaded', function() {
  console.log('Theme cargado correctamente');
  
  // Aquí puedes agregar interactividad
  initializeCart();
});

function initializeCart() {
  const cartLink = document.querySelector('.cart-link');
  if (cartLink) {
    cartLink.addEventListener('click', function(e) {
      console.log('Carrito clickeado');
    });
  }
}

// Función para agregar productos al carrito
function addToCart(variantId, quantity = 1) {
  fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      items: [
        {
          id: variantId,
          quantity: quantity
        }
      ]
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Producto agregado al carrito', data);
    updateCartCount();
  })
  .catch(error => console.error('Error:', error));
}

function updateCartCount() {
  fetch('/cart.js')
    .then(response => response.json())
    .then(data => {
      const cartLink = document.querySelector('.cart-link');
      if (cartLink) {
        cartLink.textContent = `Carrito (${data.item_count})`;
      }
    });
}
