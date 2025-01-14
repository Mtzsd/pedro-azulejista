document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const carouselContainer = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');

    let currentIndex = 0;

    const updateCarousel = () => {
        const itemWidth = items[0].clientWidth;
        carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Ajusta o carrossel ao redimensionar a janela
    window.addEventListener('resize', updateCarousel);
});

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox-overlay');
    lightbox.innerHTML = `
        <span class="close-btn">&times;</span>
        <img src="" alt="Imagem ampliada">
    `;
    document.body.appendChild(lightbox);

    const images = document.querySelectorAll('.lightbox-trigger');
    const lightboxImage = lightbox.querySelector('img');
    const closeButton = lightbox.querySelector('.close-btn');

    // Exibe a imagem no lightbox ao clicar
    images.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImage.src = img.src;
        });
    });

    // Fecha o lightbox ao clicar no botão de fechar
    closeButton.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Fecha o lightbox ao clicar fora da imagem
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});

document.addEventListener('scroll', function () {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(function (el) {
        if (isInViewport(el)) {
            el.classList.add('appear');
        }
    });
});

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= window.innerHeight;
}
