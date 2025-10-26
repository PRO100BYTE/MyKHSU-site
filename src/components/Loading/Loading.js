import React from 'react';
import { motion } from 'framer-motion';
import './Loading.css';

const Loading = () => {
  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2
      }
    },
    end: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const loadingCircleVariants = {
    start: {
      y: "0%"
    },
    end: {
      y: "100%"
    }
  };

  const loadingCircleTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeInOut"
  };

  return (
    <div className="loading-container">
      <motion.div
        className="loading-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="loading-logo"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity }
          }}
        >
          <i className="fas fa-graduation-cap"></i>
        </motion.div>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Мой ИТИ ХГУ
        </motion.h3>
        
        <motion.div
          className="loading-dots"
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          <motion.span
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
          <motion.span
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
          <motion.span
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Загрузка университетских возможностей...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loading;