import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
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
      opacity: 0,
      display: 'none'
    },
    open: {
      opacity: 1,
      display: 'block'
    }
  };

  return (
    <>
      <motion.header 
        className={`header ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="container header-container">
          <Link to="/" className="logo">
            <i className="fas fa-graduation-cap"></i>
            Мой ИТИ ХГУ
          </Link>
          
          <nav className="desktop-nav">
            <div className="nav-links">
              <Link 
                to="/" 
                className={isActiveLink('/') ? 'active' : ''}
              >
                Главная
              </Link>
              <a href="/#features">Возможности</a>
              <a href="/#screenshots">Скриншоты</a>
              <a href="/#developers">Разработчики</a>
              <a href="/#download">Скачать</a>
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
                <Link to="/" onClick={closeMobileMenu}>Главная</Link>
                <a href="/#features" onClick={closeMobileMenu}>Возможности</a>
                <a href="/#screenshots" onClick={closeMobileMenu}>Скриншоты</a>
                <a href="/#developers" onClick={closeMobileMenu}>Разработчики</a>
                <a href="/#download" onClick={closeMobileMenu}>Скачать</a>
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