// ========== CARRUSEL DE IMÁGENES ==========
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
let autoPlayInterval;

function showSlide(index) {
    // Validar índice
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    
    // Cambiar slide activo
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    
    // Cambiar dot activo
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    
    currentIndex = index;
}

function nextSlide() {
    showSlide(currentIndex + 1);
    resetAutoPlay();
}

function prevSlide() {
    showSlide(currentIndex - 1);
    resetAutoPlay();
}

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        nextSlide();
    }, 5000);
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

// Event listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        resetAutoPlay();
    });
});

// Iniciar carrusel
startAutoPlay();