import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import './Hero.css';

const Hero = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const handlePhoneClick = () => {
    setShowConfetti(true);
    setShowGame(true);
    setScore(0);
    setTimeLeft(10);
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setTimeout(() => setShowGame(false), 2000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    setTimeout(() => setShowConfetti(false), 5000);
  };

  const handleTargetClick = () => {
    setScore(prev => prev + 1);
  };

  return (
    <section className="hero">
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
      
      {showGame && (
        <div className="easter-game">
          <div className="game-header">
            <h3>Пасхалка! Кликай по иконкам!</h3>
            <p>Время: {timeLeft}с | Счет: {score}</p>
          </div>
          <div className="game-area">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="game-target"
                onClick={handleTargetClick}
                initial={{ scale: 0 }}
                animate={{ 
                  scale: 1,
                  x: Math.random() * 300 - 150,
                  y: Math.random() * 200 - 100
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <i className="fas fa-graduation-cap"></i>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <div className="container">
        <div className="hero-content">
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <h1>Мой ИТИ ХГУ - Твой университет в кармане</h1>
            <p>Официальное мобильное приложение для студентов и преподавателей Инженерно-технологического института Хакасского государственного университета</p>
            <div className="hero-btns">
              <a href="#download" className="btn btn-primary">
                <i className="fas fa-download"></i> Скачать приложение
              </a>
              <a href="#features" className="btn btn-secondary">
                <i className="fas fa-play-circle"></i> Узнать больше
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-image"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="phone-mockup-13"
            animate={floatAnimation}
            onClick={handlePhoneClick}
            style={{ cursor: 'pointer' }}
          >
            <div className="phone-notch"></div>
            <div className="phone-screen">
              <img src="/images/screenshots/hero.png" alt="Главный экран приложения" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;