const CACHE_NAME = 'pixelspot-cache-v1';
const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './compartidos.css',
    './web.css',
    './app.css',
    './script.js',
    './imagenes/logo.png',
    './imagenes/juego-2.png',
    './imagenes/juego-1.png',
    './imagenes/icono-app-grande.png',
    './imagenes/icono-app-chico.png',
    './imagenes/galeria-5.jpg',
    './imagenes/galeria-4.jpg',
    './imagenes/galeria-3.jpg',
    './imagenes/galeria-2.jpg',
    './imagenes/galeria-1.jpg',
    './imagenes/foto-perfil.jpg',
    './imagenes/foto-perfil2.jpg',
    './imagenes/banner-tablet.jpg',
    
    
    
];

// Instalar el Service Worker y almacenar los archivos en caché
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Archivos en caché');
                return cache.addAll(urlsToCache);
            })
    );
});

// Responder con caché o desde la red
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
