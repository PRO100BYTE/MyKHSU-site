import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>О приложении</h3>
            <p>Мой ИТИ ХГУ - мобильное приложение для студентов и преподавателей Инженерно-технологического института Хакасского государственного университета.</p>
            <div className="social-links">
              <a href="https://vk.com/thedayg0ne"><i className="fab fa-vk"></i></a>
              <a href="https://t.me/thedayg0ne"><i className="fab fa-telegram"></i></a>
              <a href="https://github.com/PRO100BYTE/MyKHSU"><i className="fab fa-github"></i></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Разделы</h3>
            <ul className="footer-links">
              <li><a href="#features">Возможности</a></li>
              <li><a href="#screenshots">Скриншоты</a></li>
              <li><a href="#developers">Разработчики</a></li>
              <li><a href="#download">Скачать</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Поддержка</h3>
            <ul className="footer-links">
              <li><a href="mailto:community@pro100byte.ru">Обратная связь</a></li>
              <li><Link to="/privacy-policy">Политика конфиденциальности</Link></li>
              <li><Link to="/roadmap">План развития</Link></li>
              <li>
                <Link to="/help-us" className="help-link">
                  <i className="fas fa-hands-helping"></i>
                  Помочь в разработке
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Кнопка помощи */}
        <motion.div 
          className="help-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="help-card">
            {/* Градиентная подсветка */}
            <div className="help-card-glow"></div>
            
            <div className="help-content">
              <div className="help-icon">
                <i className="fas fa-code-branch"></i>
              </div>
              <div className="help-text">
                <h4>Помогите нам стать лучше!</h4>
                <p>Присоединяйтесь к разработке и тестированию приложения</p>
              </div>
              <Link to="/help-us" className="btn btn-primary help-btn">
                Участвовать
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </motion.div>
        
        <div className="footer-bottom">
          <p>Разработано студентами группы 125-1 в составе команды PRO100BYTE Team</p>
          <p>При поддержке ХГУ им. Н.Ф. Катанова и ООО "Скалк Софт"</p>
          <p>&copy; {currentYear} Мой ИТИ ХГУ. Все права защищены.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;