import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Определение активного раздела только на главной странице
      if (location.pathname === '/') {
        const sections = ['home', 'features', 'screenshots', 'developers', 'download'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        
        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (section, e) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      // Если не на главной странице, переходим на главную с хешем
      navigate(`/#${section}`);
      closeMobileMenu();
    } else {
      // Если на главной, скроллим к секции
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(section);
      }
      closeMobileMenu();
    }
  };

  const isActiveLink = (section) => {
    return location.pathname === '/' && activeSection === section;
  };

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  };

  const overlayVariants = {
    closed: {
      opacity: 0
    },
    open: {
      opacity: 1
    }
  };

  return (
    <>
      <motion.header 
        className={`header ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="container header-container">
          <Link to="/" className="logo" onClick={() => setActiveSection('home')}>
            <i className="fas fa-graduation-cap"></i>
            <span className="logo-text">Мой ИТИ ХГУ</span>
          </Link>
          
          <nav className="desktop-nav">
            <div className="nav-links">
              <a 
                href="#home"
                className={isActiveLink('home') ? 'active' : ''}
                onClick={(e) => handleNavClick('home', e)}
              >
                Главная
              </a>
              <a 
                href="#features"
                className={isActiveLink('features') ? 'active' : ''}
                onClick={(e) => handleNavClick('features', e)}
              >
                Возможности
              </a>
              <a 
                href="#screenshots"
                className={isActiveLink('screenshots') ? 'active' : ''}
                onClick={(e) => handleNavClick('screenshots', e)}
              >
                Скриншоты
              </a>
              <a 
                href="#developers"
                className={isActiveLink('developers') ? 'active' : ''}
                onClick={(e) => handleNavClick('developers', e)}
              >
                Разработчики
              </a>
              <a 
                href="#download"
                className={isActiveLink('download') ? 'active' : ''}
                onClick={(e) => handleNavClick('download', e)}
              >
                Скачать
              </a>
              <Link 
                to="/help-us" 
                className="help-nav-btn"
                onClick={() => {
                  setActiveSection('');
                  closeMobileMenu();
                }}
              >
                <i className="fas fa-hands-helping"></i>
                Нам нужна помощь
              </Link>
            </div>
          </nav>
          
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              className="mobile-nav"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="mobile-nav-links">
                <a 
                  href="#home"
                  onClick={(e) => handleNavClick('home', e)}
                >
                  <i className="fas fa-home"></i>
                  Главная
                </a>
                <a 
                  href="#features"
                  onClick={(e) => handleNavClick('features', e)}
                >
                  <i className="fas fa-star"></i>
                  Возможности
                </a>
                <a 
                  href="#screenshots"
                  onClick={(e) => handleNavClick('screenshots', e)}
                >
                  <i className="fas fa-image"></i>
                  Скриншоты
                </a>
                <a 
                  href="#developers"
                  onClick={(e) => handleNavClick('developers', e)}
                >
                  <i className="fas fa-users"></i>
                  Разработчики
                </a>
                <a 
                  href="#download"
                  onClick={(e) => handleNavClick('download', e)}
                >
                  <i className="fas fa-download"></i>
                  Скачать
                </a>
                <Link 
                  to="/help-us" 
                  className="mobile-help-btn"
                  onClick={closeMobileMenu}
                >
                  <i className="fas fa-hands-helping"></i>
                  Нам нужна помощь
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="overlay"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={closeMobileMenu}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;