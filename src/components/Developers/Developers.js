import React from 'react';
import { motion } from 'framer-motion';
import developersData from '../../data/developers';
import './Developers.css';

const Developers = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section className="developers section" id="developers">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Наша команда
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Талантливые разработчики, создавшие приложение Мой ИТИ ХГУ
          </motion.p>
        </div>
        
        <motion.div 
          className="developers-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {developersData.map((developer) => (
            <motion.div
              key={developer.id}
              className="developer-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className={`developer-avatar ${developer.ai ? 'ai' : ''}`}>
                <img src={developer.avatar} alt={developer.name} />
              </div>
              <h3>{developer.name}</h3>
              <div className="developer-role">{developer.role}</div>
              <p className="developer-quote">{developer.quote}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Developers;