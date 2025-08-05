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
                                   <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Fale Comigo
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
                   onError={(e) => {
                     console.error('Erro ao carregar imagem:', e.target.src);
                     e.target.style.display = 'none';
                   }}
                   onLoad={() => {
                     console.log('Imagem carregada com sucesso:', '/images/banner.webp');
                   }}
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