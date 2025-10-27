import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Error.css';

const Error = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const errorCode = searchParams.get('code') || '404';
  const errorMessage = searchParams.get('message') || 'Страница не найдена';

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

  const getErrorDetails = (code) => {
    switch (code) {
      case '400':
        return {
          icon: 'fas fa-exclamation-triangle',
          title: 'Неверный запрос',
          description: 'Сервер не может обработать ваш запрос из-за неверного синтаксиса',
          color: '#f59e0b'
        };
      case '401':
        return {
          icon: 'fas fa-lock',
          title: 'Не авторизован',
          description: 'Для доступа к этой странице требуется авторизация',
          color: '#ef4444'
        };
      case '403':
        return {
          icon: 'fas fa-ban',
          title: 'Доступ запрещен',
          description: 'У вас нет прав для доступа к этой странице',
          color: '#dc2626'
        };
      case '404':
        return {
          icon: 'fas fa-question-circle',
          title: 'Страница не найдена',
          description: 'К сожалению, запрашиваемая страница не существует или была перемещена',
          color: '#8b5cf6'
        };
      case '500':
        return {
          icon: 'fas fa-server',
          title: 'Ошибка сервера',
          description: 'Внутренняя ошибка сервера. Мы уже работаем над решением проблемы',
          color: '#dc2626'
        };
      case '502':
        return {
          icon: 'fas fa-network-wired',
          title: 'Плохой шлюз',
          description: 'Сервер получил неверный ответ от вышестоящего сервера',
          color: '#f59e0b'
        };
      case '503':
        return {
          icon: 'fas fa-tools',
          title: 'Сервис недоступен',
          description: 'Сервер временно недоступен из-за технических работ',
          color: '#6366f1'
        };
      case '504':
        return {
          icon: 'fas fa-clock',
          title: 'Таймаут шлюза',
          description: 'Сервер не получил ответ от вышестоящего сервера вовремя',
          color: '#f59e0b'
        };
      default:
        return {
          icon: 'fas fa-exclamation-circle',
          title: 'Произошла ошибка',
          description: errorMessage,
          color: '#8b5cf6'
        };
    }
  };

  const errorDetails = getErrorDetails(errorCode);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Header />
      
      <section className="error-hero">
        <div className="container">
          <div className="error-content">
            <motion.div 
              className="error-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="error-number">
                <span>{errorCode}</span>
              </div>
              
              <div 
                className="error-icon"
                style={{ '--error-color': errorDetails.color }}
              >
                <i className={errorDetails.icon}></i>
              </div>
              
              <h1>{errorDetails.title}</h1>
              <p>{errorDetails.description}</p>
              
              <div className="error-actions">
                <Link to="/" className="btn btn-primary">
                  <i className="fas fa-home"></i>
                  На главную
                </Link>
                <Link to="/roadmap" className="btn btn-secondary">
                  <i className="fas fa-map"></i>
                  План развития
                </Link>
                <Link to="/help-us" className="btn btn-secondary">
                  <i className="fas fa-hands-helping"></i>
                  Помочь в разработке
                </Link>
              </div>

              <div className="error-help">
                <h3>Нужна помощь?</h3>
                <p>Если ошибка повторяется, свяжитесь с нашей технической поддержкой</p>
                <div className="support-contacts">
                  <a href="mailto:community@pro100byte.ru" className="contact-link">
                    <i className="fas fa-envelope"></i>
                    community@pro100byte.ru
                  </a>
                  <a href="https://t.me/thedayg0ne" className="contact-link">
                    <i className="fab fa-telegram"></i>
                    @thedayg0ne
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Error;