import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import './Hero.css';

const Hero = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [gameActive, setGameActive] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [sequence, setSequence] = useState([]);
  const [playerSequence, setPlayerSequence] = useState([]);
  const [level, setLevel] = useState(1);

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

  // Новая игра: запомни последовательность
  const startGame = () => {
    setShowConfetti(true);
    setShowGame(true);
    setScore(0);
    setTimeLeft(20);
    setGameActive(true);
    setGameFinished(false);
    setLevel(1);
    setSequence([]);
    setPlayerSequence([]);
    generateNewSequence();
  };

  const generateNewSequence = () => {
    const newSequence = [...sequence];
    const newColor = Math.floor(Math.random() * 4);
    newSequence.push(newColor);
    setSequence(newSequence);
    playSequence(newSequence);
  };

  const playSequence = (seq) => {
    setGameActive(false);
    let i = 0;
    const interval = setInterval(() => {
      highlightColor(seq[i]);
      i++;
      if (i >= seq.length) {
        clearInterval(interval);
        setTimeout(() => {
          setGameActive(true);
          setPlayerSequence([]);
        }, 500);
      }
    }, 800);
  };

  const highlightColor = (colorIndex) => {
    const colors = document.querySelectorAll('.color-button');
    colors[colorIndex].classList.add('active');
    setTimeout(() => {
      colors[colorIndex].classList.remove('active');
    }, 400);
  };

  const handleColorClick = (colorIndex) => {
    if (!gameActive || gameFinished) return;

    highlightColor(colorIndex);
    const newPlayerSequence = [...playerSequence, colorIndex];
    setPlayerSequence(newPlayerSequence);

    // Проверяем правильность последовательности
    for (let i = 0; i < newPlayerSequence.length; i++) {
      if (newPlayerSequence[i] !== sequence[i]) {
        endGame(false);
        return;
      }
    }

    // Если последовательность полностью правильная
    if (newPlayerSequence.length === sequence.length) {
      const newScore = score + level * 10;
      setScore(newScore);
      setLevel(level + 1);
      setPlayerSequence([]);
      setTimeout(() => generateNewSequence(), 1000);
    }
  };

  const endGame = (victory = false) => {
    setGameActive(false);
    setGameFinished(true);
    if (victory) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  const closeGame = () => {
    setShowGame(false);
    setGameActive(false);
    setGameFinished(false);
  };

  // Таймер игры
  useEffect(() => {
    if (gameActive && timeLeft > 0 && !gameFinished) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            endGame(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [gameActive, timeLeft, gameFinished]);

  const getColorName = (index) => {
    const colors = ['Красный', 'Синий', 'Зеленый', 'Желтый'];
    return colors[index];
  };

  const getMessage = () => {
    if (gameFinished) {
      if (score >= 150) return "Отлично! Ты настоящий мастер памяти!";
      if (score >= 70) return "Хорошо! Отличная работа!";
      if (score >= 30) return "Неплохо! Можешь лучше!";
      return "Попробуй еще раз!";
    }
    return "Запомни и повтори последовательность!";
  };

  return (
    <section className="hero" id="home">
      {showConfetti && <Confetti recycle={false} numberOfPieces={300} />}
      
      <AnimatePresence>
        {showGame && (
          <motion.div 
            className="game-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeGame}
          >
            <motion.div 
              className="game-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={closeGame}>
                <i className="fas fa-times"></i>
              </button>
              
              <div className="game-header">
                <h3>🎮 Пасхалка: Проверь свою память!</h3>
                <p>{getMessage()}</p>
                <div className="game-stats">
                  <span>Время: {timeLeft} с</span>
                  <span>Счет: {score}</span>
                  <span>Уровень: {level}</span>
                </div>
              </div>
              
              <div className="memory-game-area">
                <div className="sequence-info">
                  {!gameFinished && (
                    <p>Запомни последовательность из {sequence.length} цветов</p>
                  )}
                </div>
                
                <div className="color-grid">
                  <button 
                    className="color-button red"
                    onClick={() => handleColorClick(0)}
                    disabled={!gameActive || gameFinished}
                  >
                    <i className="fas fa-square"></i>
                  </button>
                  <button 
                    className="color-button blue"
                    onClick={() => handleColorClick(1)}
                    disabled={!gameActive || gameFinished}
                  >
                    <i className="fas fa-square"></i>
                  </button>
                  <button 
                    className="color-button green"
                    onClick={() => handleColorClick(2)}
                    disabled={!gameActive || gameFinished}
                  >
                    <i className="fas fa-square"></i>
                  </button>
                  <button 
                    className="color-button yellow"
                    onClick={() => handleColorClick(3)}
                    disabled={!gameActive || gameFinished}
                  >
                    <i className="fas fa-square"></i>
                  </button>
                </div>

                {gameFinished && (
                  <motion.div 
                    className="game-result"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h4>Игра окончена!</h4>
                    <div className="final-stats">
                      <p>Твой счет: <strong>{score}</strong></p>
                      <p>Достигнутый уровень: <strong>{level}</strong></p>
                      <p>Правильных последовательностей: <strong>{Math.floor(score / 10)}</strong></p>
                    </div>
                    <button className="btn btn-primary" onClick={startGame}>
                      <i className="fas fa-redo"></i> Играть снова
                    </button>
                  </motion.div>
                )}
              </div>
              
              <div className="game-footer">
                <p>Запомни последовательность цветов и повтори её!</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              <Link to="/roadmap" className="btn btn-secondary roadmap-btn">
                <i className="fas fa-map"></i> План развития
              </Link>
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
            className="screenshot-container"
            animate={floatAnimation}
            onClick={startGame}
          >
            <div className="screenshot-glow"></div>
            <img 
              src="/images/screenshots/hero.png" 
              alt="Главный экран приложения Мой ИТИ ХГУ"
              className="hero-screenshot"
            />
            <div className="easter-egg-hint">
              <i className="fas fa-search"></i>
              <span>Найди пасхалку!</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;