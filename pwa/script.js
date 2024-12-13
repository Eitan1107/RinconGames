// Formulario: Mensaje de confirmación al enviar
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se recargue la página
  alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
});

// Registro del Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
      .then(() => console.log('Service Worker registrado'))
      .catch(err => console.error('Error al registrar el Service Worker:', err));
}
if (window.matchMedia('(display-mode: standalone)').matches) {
  document.body.classList.add('app');
} else {
  document.body.classList.add('web');
}
