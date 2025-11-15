import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import './Download.css';

const Download = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  const downloadLinks = [
    {
      id: 1,
      icon: 'fab fa-google-play',
      label: 'Доступно в',
      platform: 'Google Play',
      href: '#',
      available: false,
      message: 'На данный момент у нас возникли небольшие трудности с публикацией приложения в Google Play, но мы активно работаем над этим, поэтому - немного терпения, пожалуйста :). Если не терпится - можно установить приложение с помощью APK файла'
    },
    {
      id: 2,
      icon: 'fab fa-android',
      label: 'Загрузите',
      platform: 'APK',
      href: 'https://github.com/PRO100BYTE/MyKHSU/releases/latest',
      available: true
    },
    {
      id: 3,
      icon: 'fab fa-apple',
      label: 'Загрузите в',
      platform: 'App Store',
      href: '#',
      available: false,
      message: 'На данный момент мы активно работаем над выходом приложения в App Store, поэтому - немного терпения, пожалуйста :). Если не терпится - можно установить тестовую сборку через TestFlight'
    },
    {
      id: 4,
      icon: 'fab fa-apple',
      label: 'Загрузите в',
      platform: 'TestFlight',
      href: 'https://testflight.apple.com/join/UmAjEEsb',
      available: true
    },
    {
      id: 5,
      icon: 'fab fa-github',
      label: 'Исходный код на',
      platform: 'GitHub',
      href: 'https://github.com/PRO100BYTE/MyKHSU',
      available: true
    },
    {
      id: 6,
      icon: 'fa fa-cloud',
      label: 'Откройте',
      platform: 'веб-версию',
      href: 'https://t2iti.khsu.ru',
      available: false,
      message: 'Мы получили интересную идею: разработать веб-версию приложения Мой ИТИ ХГУ с использованием дизайна и функциональности мобильного приложения. В ближайшее время займемся этим, так что - следите за новостями :)'
    }
  ];

  const handleDownloadClick = (link) => {
    if (link.available) {
      setSelectedPlatform(link);
      setShowModal(true);
      setCountdown(5);
      setShowDownloadButton(false);
      
      // Очищаем предыдущий таймер, если он существует
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      
      timerRef.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            
            // На мобильных устройствах показываем кнопку для ручного перехода
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
              setShowDownloadButton(true);
            } else {
              // На ПК открываем в новой вкладке и перенаправляем текущую
              window.open(link.href, '_blank', 'noopener,noreferrer');
              setTimeout(() => {
                navigate('/download-thank-you');
              }, 100);
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setSelectedPlatform(link);
      setShowModal(true);
      setCountdown(0);
      setShowDownloadButton(false);
    }
  };

  const handleManualDownload = () => {
    if (selectedPlatform && selectedPlatform.available) {
      window.open(selectedPlatform.href, '_blank', 'noopener,noreferrer');
      setTimeout(() => {
        navigate('/download-thank-you');
      }, 100);
    }
  };

  const closeModal = () => {
    // Очищаем таймер при закрытии модального окна
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setShowModal(false);
    setSelectedPlatform(null);
    setCountdown(5);
    setShowDownloadButton(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="download section" id="download">
      <AnimatePresence>
        {showModal && selectedPlatform && (
          <motion.div 
            className="download-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="download-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
              
              <div className="download-modal-header">
                <div className="platform-icon">
                  <i className={selectedPlatform.icon}></i>
                </div>
                <h3>{selectedPlatform.platform}</h3>
                {!selectedPlatform.available && (
                  <div className="availability-badge unavailable">
                    <i className="fas fa-clock"></i>
                    Скоро будет доступно
                  </div>
                )}
                {selectedPlatform.available && (
                  <div className="availability-badge available">
                    <i className="fas fa-check"></i>
                    Доступно для скачивания
                  </div>
                )}
              </div>

              <div className="download-modal-body">
                {selectedPlatform.available ? (
                  <>
                    {!showDownloadButton ? (
                      <div className="countdown-section">
                        <h4>Спасибо за интерес к нашему приложению!</h4>
                        <p>Вы будете перенаправлены через: <span className="countdown-number">{countdown}</span> секунд</p>
                        {countdown > 0 && (
                          <div className="countdown-loader">
                            <div 
                              className="countdown-progress"
                              style={{ width: `${(countdown / 5) * 100}%` }}
                            ></div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="manual-download-section">
                        <div className="manual-download-icon">
                          <i className="fas fa-mobile-alt"></i>
                        </div>
                        <h4>Перейдите к загрузке</h4>
                        <p>Нажмите кнопку ниже, чтобы перейти к странице загрузки</p>
                        <button className="btn btn-primary manual-download-btn" onClick={handleManualDownload}>
                          <i className={selectedPlatform.icon}></i>
                          Перейти к загрузке {selectedPlatform.platform}
                        </button>
                      </div>
                    )}
                    
                    <div className="download-info">
                      <p>Если возникли проблемы со скачиванием или использованием приложения, пожалуйста, сообщите нам:</p>
                      <div className="support-links">
                        <a href="mailto:community@pro100byte.ru" className="btn btn-secondary">
                          <i className="fas fa-envelope"></i>
                          Написать на почту
                        </a>
                        <a href="https://t.me/thedayg0ne" className="btn btn-secondary">
                          <i className="fab fa-telegram"></i>
                          Написать в Telegram
                        </a>
                      </div>
                    </div>

                    <div className="help-banner">
                      <div className="help-banner-content">
                        <div className="help-banner-icon">
                          <i className="fas fa-hands-helping"></i>
                        </div>
                        <div className="help-banner-text">
                          <h5>Нам нужна помощь!</h5>
                          <p>Присоединяйтесь к разработке и тестированию приложения</p>
                        </div>
                        <Link to="/help-us" className="btn btn-primary" onClick={closeModal}>
                          Участвовать
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="unavailable-message">
                    <div className="message-icon">
                      <i className="fas fa-info-circle"></i>
                    </div>
                    <h4>Приложение пока недоступно</h4>
                    <p>{selectedPlatform.message}</p>
                    <div className="alternative-links">
                      {(selectedPlatform.platform === 'Google Play') && (
                        <button 
                          className="btn btn-primary"
                          onClick={() => {
                            const apkLink = downloadLinks.find(link => link.platform === 'APK');
                            if (apkLink) handleDownloadClick(apkLink);
                          }}
                        >
                          <i className="fab fa-android"></i>
                          Скачать APK
                        </button>
                      )}
                      {(selectedPlatform.platform === 'App Store') && (
                        <button 
                          className="btn btn-primary"
                          onClick={() => {
                            const testflightLink = downloadLinks.find(link => link.platform === 'TestFlight');
                            if (testflightLink) handleDownloadClick(testflightLink);
                          }}
                        >
                          <i className="fab fa-apple"></i>
                          TestFlight
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container">
        <div className="download-content">
          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Скачайте приложение
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Получите полный доступ ко всем функциям Мой ИТИ ХГУ
            </motion.p>
          </div>
          
          <motion.div 
            className="download-btns"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {downloadLinks.map((link) => (
              <motion.button
                key={link.id}
                className={`download-btn ${!link.available ? 'unavailable' : ''}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: link.available ? 1.05 : 1,
                  y: link.available ? -5 : 0,
                  transition: { duration: 0.3 }
                }}
                onClick={() => handleDownloadClick(link)}
                disabled={!link.available}
              >
                <i className={link.icon}></i>
                <div className="download-btn-text">
                  <span>{link.label}</span>
                  <span>{link.platform}</span>
                  {!link.available && (
                    <span className="availability-text">Скоро</span>
                  )}
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Download;