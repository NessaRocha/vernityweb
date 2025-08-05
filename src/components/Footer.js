import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
                     <motion.div 
             className="footer-logo"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
           >
                           <img 
                src="/images/logo.svg" 
                alt="Vernity Web" 
                className="footer-logo-img"
              />
             <h3 style={{ display: 'none' }}>Vernity Web</h3>
             <p>Desenvolvimento que traduz sua marca em performance, elegância e resultados.</p>
           </motion.div>
          
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Links Rápidos</h4>
            <ul>
              <li>
                <a 
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a 
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                >
                  Serviços
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('portfolio');
                  }}
                >
                  Portfólio
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Redes Sociais</h4>
                                         <div className="social-links">
                  <a href="https://www.linkedin.com/in/vanessa-rocha86/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                  <a href="https://github.com/NessaRocha" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                  <a href="https://wa.me/5551996138467" target="_blank" rel="noopener noreferrer" className="social-link">WhatsApp</a>
                  <a href="https://www.instagram.com/vernityweb/" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
                </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2024 Vernity Web. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 