// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-music');
    audio.volume = 0.5; // Ajusta el volumen de 0.0 a 1.0

    var swipers = document.querySelectorAll('.swiper-container');
    swipers.forEach(function(swiperContainer) {
        new Swiper(swiperContainer, {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    });
});

function iniciar() {
    document.getElementById('bienvenida').style.display = 'none';
    document.getElementById('contenido').style.display = 'block';
    
    var audio = document.getElementById('background-music');
    audio.play();
}

function mostrarSeccion(id) {
    document.getElementById(id).style.display = 'block';
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
