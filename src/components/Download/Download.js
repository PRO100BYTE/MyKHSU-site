import React from 'react';
import { motion } from 'framer-motion';
import './Download.css';

const Download = () => {
  const downloadLinks = [
    {
      id: 1,
      icon: 'fab fa-google-play',
      label: 'Доступно в',
      platform: 'Google Play',
      href: '#'
    },
    {
      id: 2,
      icon: 'fab fa-android',
      label: 'Загрузите',
      platform: 'APK',
      href: 'https://github.com/PRO100BYTE/MyKHSU/releases/tag/stable'
    },
    {
      id: 3,
      icon: 'fab fa-apple',
      label: 'Загрузите в',
      platform: 'App Store',
      href: '#'
    },
    {
      id: 4,
      icon: 'fab fa-apple',
      label: 'Загрузите в',
      platform: 'TestFlight',
      href: 'https://testflight.apple.com/join/UmAjEEsb'
    },
    {
      id: 5,
      icon: 'fab fa-github',
      label: 'Исходный код на',
      platform: 'GitHub',
      href: 'https://github.com/PRO100BYTE/MyKHSU'
    }
  ];

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
              <motion.a
                key={link.id}
                href={link.href}
                className="download-btn"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={link.icon}></i>
                <div className="download-btn-text">
                  <span>{link.label}</span>
                  <span>{link.platform}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Download;