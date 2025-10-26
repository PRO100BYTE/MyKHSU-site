import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import Screenshots from '../../components/Screenshots/Screenshots';
import Developers from '../../components/Developers/Developers';
import Download from '../../components/Download/Download';
import './Home.css';

const Home = () => {
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

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Header />
      <Hero />
      <Features />
      <Screenshots />
      <Developers />
      <Download />
      <Footer />
    </motion.div>
  );
};

export default Home;