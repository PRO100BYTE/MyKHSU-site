import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import './DownloadThankYou.css';

const DownloadThankYou = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.8
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Header />
      
      <section className="thankyou-hero">
        <div className="container">
          <div className="thankyou-hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Спасибо за скачивание!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Мы надеемся, что приложение Мой ИТИ ХГУ будет полезным для вас
            </motion.p>
          </div>
        </div>
      </section>

      <section className="thankyou-section">
        <div className="container">
          <div className="thankyou-content">
            <motion.div 
              className="thankyou-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="thankyou-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h2>Приложение успешно скачано</h2>
              <p>Если у вас возникли проблемы с установкой или использованием приложения, пожалуйста, свяжитесь с нами:</p>
              
              <div className="contact-options">
                <div className="contact-option">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h3>Электронная почта</h3>
                    <a href="mailto:community@pro100byte.ru">community@pro100byte.ru</a>
                  </div>
                </div>
                <div className="contact-option">
                  <i className="fab fa-telegram"></i>
                  <div>
                    <h3>Telegram</h3>
                    <a href="https://t.me/thedayg0ne">@thedayg0ne</a>
                  </div>
                </div>
                <div className="contact-option">
                  <i className="fab fa-vk"></i>
                  <div>
                    <h3>ВКонтакте</h3>
                    <a href="https://vk.com/thedayg0ne">thedayg0ne</a>
                  </div>
                </div>
              </div>

              <div className="help-banner">
                <div className="help-banner-content">
                  <div className="help-banner-icon">
                    <i className="fas fa-hands-helping"></i>
                  </div>
                  <div className="help-banner-text">
                    <h3>Нам нужна помощь!</h3>
                    <p>Присоединяйтесь к разработке и тестированию приложения</p>
                  </div>
                  <Link to="/help-us" className="btn btn-primary">
                    Участвовать
                  </Link>
                </div>
              </div>

              <div className="action-buttons">
                <Link to="/" className="btn btn-secondary">
                  <i className="fas fa-home"></i>
                  На главную
                </Link>
                <Link to="/roadmap" className="btn btn-secondary">
                  <i className="fas fa-map"></i>
                  План развития
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default DownloadThankYou;