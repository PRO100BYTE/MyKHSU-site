// Карусель для скриншотов
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('screenshotCarousel');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const dotsContainer = document.getElementById('carouselDots');
    const slides = document.querySelectorAll('.screenshot-slide');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoScrollInterval;
    
    // Создание точек для навигации
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        dot.setAttribute('data-slide', index);
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.carousel-dot');
    
    // Функция для переключения слайда
    function goToSlide(slideIndex) {
        if (slideIndex < 0) {
            slideIndex = totalSlides - 1;
        } else if (slideIndex >= totalSlides) {
            slideIndex = 0;
        }
        
        carousel.style.transform = `translateX(-${slideIndex * 330}px)`;
        
        // Обновление активной точки
        dots.forEach(dot => dot.classList.remove('active'));
        dots[slideIndex].classList.add('active');
        
        currentSlide = slideIndex;
    }
    
    // Обработчики для кнопок навигации
    prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
        resetAutoScroll();
    });
    
    nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
        resetAutoScroll();
    });
    
    // Обработчики для точек
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetAutoScroll();
        });
    });
    
    // Функция для автоматической прокрутки
    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 4000);
    }
    
    // Функция для сброса автоматической прокрутки
    function resetAutoScroll() {
        clearInterval(autoScrollInterval);
        startAutoScroll();
    }
    
    // Запуск автоматической прокрутки
    startAutoScroll();
    
    // Остановка автоматического переключения при наведении
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoScrollInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        startAutoScroll();
    });
    
    // Поддержка свайпов на мобильных устройствах
    let startX = 0;
    let endX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    carousel.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        
        if (startX - endX > swipeThreshold) {
            // Свайп влево - следующий слайд
            goToSlide(currentSlide + 1);
            resetAutoScroll();
        } else if (endX - startX > swipeThreshold) {
            // Свайп вправо - предыдущий слайд
            goToSlide(currentSlide - 1);
            resetAutoScroll();
        }
    }
});