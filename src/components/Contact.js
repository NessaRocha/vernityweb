import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });



  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Entre em Contato
        </motion.h2>
        
        <motion.div 
          className="contact-content"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
                     <motion.div className="contact-info" variants={itemVariants}>
             <h3>Vamos criar algo incrível juntas!</h3>
             <p>Transforme sua visão em realidade digital. Estou pronta para desenvolver soluções web únicas que elevem sua marca e gerem resultados excepcionais.</p>
            <div className="contact-details">
                                             <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>nessasim@hotmail.com</span>
                </div>
               <div className="contact-item">
                 <span className="contact-icon">📱</span>
                 <span>+55 (51) 99613-8467</span>
               </div>
                                   <div className="contact-item">
                      <span className="contact-icon">📍</span>
                      <span>Torres, RS - Brasil</span>
                    </div>
            </div>
          </motion.div>
          
                     <motion.div className="contact-actions" variants={itemVariants}>
                            <motion.a
                 href="https://wa.me/5551996138467?text=Olá! Gostaria de conversar sobre um projeto web para minha empresa."
                 target="_blank"
                 rel="noopener noreferrer"
                 className="btn btn-primary"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               >
                 💬 Falar no WhatsApp
               </motion.a>
             
                           <motion.a
                href="mailto:nessasim@hotmail.com"
                className="btn btn-secondary"
                style={{ marginTop: '1rem' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📧 Enviar Email
              </motion.a>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 