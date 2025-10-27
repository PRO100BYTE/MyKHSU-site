import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Roadmap.css';

const Roadmap = () => {
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

  const roadmapData = [
    {
      version: "v2.2",
      title: "Расширение функциональности",
      status: "planned",
      items: [
        "Запуск службы уведомлений для отправки уведомлений о новых новостях и начале/конце пары",
        "Реализация возможности добавления заметок/домашнего задания к паре",
        "Продолжаем дорабатывать карту для ее возможного кэширования",
        "Офлайн-режим для карты (если получится :) )"
      ]
    },
    {
      version: "v2.1",
      title: "Основные обновления",
      status: "in-progress",
      items: [
        "Переработка карты корпусов с использованием 2ГИС в качестве поставщика карт",
        "Доработка службы уведомлений для ее корректной работы на момент запуска",
        "Расширенная карта корпусов ХГУ с отдельным списком корпусов (раздел Первокурснику)",
        "Офлайн-режим для карты (если получится :) )"
      ]
    },
    {
      version: "v1.5",
      title: "Улучшения интерфейса и функциональные доработки",
      status: "completed",
      items: [
        "Раздел Первокурснику с полезными ссылками и информацией",
        "Переработана логика отображения расписания",
        "Добавлено выделение текущей пары (дневной/недельный режим отображения)",
        "Добавлено выделение текущего дня (недельный режим отображения)",
        "Улучшенная анимация переходов",
        "Прочие исправления багов :)"
      ]
    },
    {
      version: "v1.2",
      title: "Функциональные улучшения",
      status: "completed",
      items: [
        "Поддержка нескольких групп/преподавателей",
        "Добавление формата отображения расписания Для преподавателей",
        "Реализована основа для уведомлений с работой в фоне",
        "Добавлены настройки уведомлений: О новых новостях, О начале / конце пары",
        "Добавление карты корпусов ХГУ"
      ]
    },
    {
      version: "v1.0",
      title: "Первая версия приложения",
      status: "completed",
      items: [
        "Безопасный парсинг расписания и новостей с использованием CORS прокси в случае ошибки подключения",
        "Умное кэширование расписания",
        "Умное кэширование новостей",
        "Настройка оформления приложения"
      ]
    }
  ];

  const studentIdeas = [
    "Интеграция с библиотекой ХГУ",
    "Чат для обсуждения занятий",
    "Система поиска одногруппников",
    "Расписание столовой",
    "Модуль для заметок и домашних заданий",
    "Система оповещения о свободных аудиториях",
    "Интеграция с системой тестирования",
    "Персональные рекомендации по обучению"
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return 'fas fa-check-circle';
      case 'in-progress':
        return 'fas fa-spinner';
      case 'planned':
        return 'fas fa-clock';
      default:
        return 'fas fa-circle';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'var(--secondary-color)';
      case 'in-progress':
        return 'var(--primary-color)';
      case 'planned':
        return 'var(--text-secondary)';
      default:
        return 'var(--text-color)';
    }
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
      
      <section className="roadmap-hero">
        <div className="container">
          <div className="roadmap-hero-content">
            <h1>План развития приложения</h1>
            <p>Узнайте о наших планах и предложите свои идеи для улучшения Мой ИТИ ХГУ</p>
          </div>
        </div>
      </section>

      <section className="roadmap-section">
        <div className="container">
          <div className="section-title">
            <h2>Дорожная карта</h2>
            <p>Наши планы по развитию приложения в ближайших обновлениях</p>
          </div>
          
          <div className="roadmap-container">
            {roadmapData.map((version, index) => (
              <motion.div 
                key={version.version}
                className="roadmap-version"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="version-header">
                  <div className="version-info">
                    <h3>{version.version}</h3>
                    <span 
                      className="version-status"
                      style={{ color: getStatusColor(version.status) }}
                    >
                      <i className={getStatusIcon(version.status)}></i>
                      {version.status === 'completed' && ' Завершено'}
                      {version.status === 'in-progress' && ' В разработке'}
                      {version.status === 'planned' && ' Запланировано'}
                    </span>
                  </div>
                  <h4>{version.title}</h4>
                </div>
                <ul className="version-features">
                  {version.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="ideas-section">
        <div className="container">
          <div className="section-title">
            <h2>Идеи от студентов</h2>
            <p>Предложения, которые мы получили во время тестирования приложения</p>
          </div>
          
          <div className="ideas-grid">
            {studentIdeas.map((idea, index) => (
              <motion.div
                key={index}
                className="idea-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="idea-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <p>{idea}</p>
                <div className="idea-vote">
                  <span>+{Math.floor(Math.random() * 50) + 10}</span>
                  <i className="fas fa-chevron-up"></i>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="ideas-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="cta-content">
              <h3>Есть идея для улучшения?</h3>
              <p>Поделитесь своими предложениями и мы рассмотрим их для реализации</p>
              <a href="/help-us" className="btn btn-primary">
                <i className="fas fa-comment-alt"></i>
                Предложить идею
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Roadmap;