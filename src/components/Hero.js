import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-text">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-white">DESENVOLVIMENTO</span><br />
              <span className="text-red">QUE TRADUZ</span><br />
              <span className="text-white">SUA MARCA EM</span><br />
              <span className="text-red">PERFORMANCE,</span><br />
              <span className="text-white">ELEGÂNCIA E</span><br />
              <span className="text-red">RESULTADOS.</span>
            </motion.h1>
            
                         <motion.p 
               className="hero-subtitle"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
             >
               Sou uma desenvolvedora web profissional<br />
               especializada em criar soluções digitais únicas.
             </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a 
                href="#portfolio" 
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('portfolio');
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Portfólio
              </motion.a>
                             <motion.a 
                 href="https://wa.me/5551996138467?text=Olá! Gostaria de conversar sobre um projeto web para minha empresa."
                 target="_blank"
                 rel="noopener noreferrer"
                 className="btn btn-secondary"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               >
                 💬 Fale Comigo
               </motion.a>
            </motion.div>
          </div>
        </motion.div>
        
                 <motion.div 
           className="hero-image"
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
         >
                       <div className="profile-container">
              {/* Elementos geométricos de fundo */}
              <motion.div 
                className="geometric-element"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.div 
                className="geometric-element"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              />
              <motion.div 
                className="geometric-element"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              />
              
              <motion.div 
                className="profile-image"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
              >
                                                 <motion.img 
                  src="/images/banner.webp" 
                  alt="Vernity Web - Desenvolvedora Web" 
                  className="profile-img"
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                   whileHover={{ scale: 1.02 }}
                 />
                <div className="profile-placeholder" style={{ display: 'none' }}>
                  <svg width="200" height="200" viewBox="0 0 200 200">
                    <circle cx="100" cy="80" r="40" fill="#333"/>
                    <path d="M20 180 C20 140 60 120 100 120 C140 120 180 140 180 180" fill="#333"/>
                  </svg>
                </div>
              </motion.div>
            </div>
         </motion.div>
      </div>
      
      <div className="hero-background">
        <motion.div 
          className="watermark"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          VERNITY WEB
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 