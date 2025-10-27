import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Screenshots.css';

const Screenshots = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const trackRef = useRef(null);

  const screenshots = [
    { id: 1, src: '/images/screenshots/screenshot1.png', alt: 'Расписание студента (на день)' },
    { id: 2, src: '/images/screenshots/screenshot2.png', alt: 'Расписание студента (на неделю)' },
    { id: 3, src: '/images/screenshots/screenshot3.png', alt: 'Расписание преподавателя' },
    { id: 4, src: '/images/screenshots/screenshot4.png', alt: 'Интерактивная карта корпусов ХГУ' },
    { id: 5, src: '/images/screenshots/screenshot5.png', alt: 'Раздел для первокурсников' },
    { id: 6, src: '/images/screenshots/screenshot6.png', alt: 'Раздел с новостями' },
    { id: 7, src: '/images/screenshots/screenshot7.png', alt: 'Настройки приложения' },
    { id: 8, src: '/images/screenshots/screenshot8.png', alt: 'Настройка формата отображения расписания' },
    { id: 9, src: '/images/screenshots/screenshot9.png', alt: 'Настройка уведомлений' }
  ];

  // Определяем количество видимых слайдов в зависимости от ширины экрана
  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth >= 1200) {
        setVisibleSlides(3);
      } else if (window.innerWidth >= 768) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(1);
      }
    };

    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, []);

  // Бесконечная карусель
  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoScroll, screenshots.length]);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 10000);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="screenshots section" id="screenshots">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Скриншоты приложения
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Удобный и современный интерфейс, адаптированный под ваши потребности
          </motion.p>
        </div>
        
        <div className="screenshots-container">
          <motion.div 
            className="screenshot-carousel-container"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="screenshot-carousel">
              <div 
                className="screenshot-track"
                ref={trackRef}
                style={{ 
                  transform: `translateX(-${(currentSlide * 100) / visibleSlides}%)`,
                  gridTemplateColumns: `repeat(${screenshots.length}, calc(100% / ${visibleSlides}))`
                }}
              >
                {screenshots.map((screenshot, index) => (
                  <div key={screenshot.id} className="screenshot-slide">
                    <div className="screenshot-item">
                      <div className="screenshot-glow"></div>
                      <motion.img 
                        src={screenshot.src} 
                        alt={screenshot.alt}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => openModal(screenshot)}
                      />
                      <div className="screenshot-overlay">
                        <button 
                          className="screenshot-zoom-btn"
                          onClick={() => openModal(screenshot)}
                        >
                          <i className="fas fa-search-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="carousel-nav carousel-prev" onClick={prevSlide}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="carousel-nav carousel-next" onClick={nextSlide}>
                <i className="fas fa-chevron-right"></i>
              </button>
              
              <div className="carousel-dots">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Модальное окно для увеличенного просмотра */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <p>{selectedImage.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Screenshots;