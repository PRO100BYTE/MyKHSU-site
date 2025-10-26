import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './HelpUs.css';

const HelpUs = () => {
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

  const helpOptions = [
    {
      icon: 'fas fa-bug',
      title: 'Тестирование приложения',
      description: 'Помогите нам найти баги и предложить улучшения',
      tasks: [
        'Тестирование новых версий приложения',
        'Сообщение об ошибках и неудобствах',
        'Предложение новых функций'
      ]
    },
    {
      icon: 'fas fa-code',
      title: 'Разработка',
      description: 'Присоединяйтесь к разработке как программист',
      tasks: [
        'Разработка новых функций',
        'Исправление ошибок',
        'Оптимизация кода'
      ]
    },
    {
      icon: 'fas fa-palette',
      title: 'Дизайн',
      description: 'Помогите улучшить пользовательский интерфейс',
      tasks: [
        'Создание макетов экранов',
        'Разработка анимаций',
        'Улучшение UX/UI'
      ]
    },
    {
      icon: 'fas fa-comments',
      title: 'Поддержка сообщества',
      description: 'Помогите другим пользователям',
      tasks: [
        'Ответы на вопросы в чатах',
        'Создание инструкций',
        'Помощь новичкам'
      ]
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Header />
      
      <section className="help-hero">
        <div className="container">
          <div className="help-hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Помогите нам стать лучше!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Присоединяйтесь к разработке и тестированию приложения Мой ИТИ ХГУ
            </motion.p>
          </div>
        </div>
      </section>

      <section className="help-section">
        <div className="container">
          <div className="section-title">
            <h2>Как вы можете помочь</h2>
            <p>Выберите направление, в котором хотите участвовать</p>
          </div>
          
          <div className="help-options-grid">
            {helpOptions.map((option, index) => (
              <motion.div
                key={index}
                className="help-option-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="option-icon">
                  <i className={option.icon}></i>
                </div>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <ul className="option-tasks">
                  {option.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="section-title">
            <h2>Свяжитесь с нами</h2>
            <p>Выберите удобный способ связи</p>
          </div>
          
          <div className="contact-methods">
            <motion.div 
              className="contact-method"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="contact-icon">
                <i className="fab fa-telegram"></i>
              </div>
              <h3>Telegram</h3>
              <p>Напишите нам в Telegram для быстрой связи</p>
              <a href="https://t.me/thedayg0ne" className="btn btn-primary">
                Написать в Telegram
              </a>
            </motion.div>
            
            <motion.div 
              className="contact-method"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="contact-icon">
                <i className="fab fa-github"></i>
              </div>
              <h3>GitHub</h3>
              <p>Присоединяйтесь к разработке на GitHub</p>
              <a href="https://github.com/PRO100BYTE/MyKHSU" className="btn btn-primary">
                Перейти на GitHub
              </a>
            </motion.div>
            
            <motion.div 
              className="contact-method"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email</h3>
              <p>Напишите нам на почту для официальных предложений</p>
              <a href="mailto:community@pro100byte.ru" className="btn btn-primary">
                Написать на почту
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default HelpUs;