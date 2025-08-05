import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skills = [
    'React.js', 'Node.js', 'WordPress', 'Shopify', 'JavaScript', 
    'HTML5', 'CSS3', 'Responsive Design', 'UI/UX Design', 'SEO', 'Acessibilidade'
  ];

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
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Sobre Mim
        </motion.h2>
        
        <motion.div 
          className="about-content"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
                                     <motion.div className="about-text" variants={itemVariants}>
                  <p>
                    Com uma trajetória sólida no desenvolvimento web, transformo códigos em experiências digitais que fazem sentido — para quem usa e para quem contrata. Minha missão vai além de entregar projetos funcionais: busco criar soluções que encantem na primeira navegação e se mantenham consistentes com os objetivos de negócio.
                  </p>
                  <p>
                    Sou especializada em React, Node.js, WordPress e Shopify, com domínio de UX, design responsivo e as melhores práticas para performance, acessibilidade e SEO. Trabalho com foco em interfaces intuitivas, sistemas escaláveis e projetos sob medida — do código ao comportamento do usuário.
                  </p>
                  <p>
                    Cada linha de código que escrevo carrega estratégia, cuidado com a experiência e um olhar atento à inovação. Do planejamento à entrega, meu foco está sempre em construir experiências digitais completas, otimizadas e com identidade.
                  </p>
                </motion.div>
          
          <motion.div className="skills" variants={itemVariants}>
            <h3>Minhas Habilidades</h3>
            <div className="skill-tags">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1 
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            <motion.div className="github-section" variants={itemVariants}>
              <a 
                href="https://github.com/NessaRocha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={{ marginRight: '8px' }}>
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                Ver meus projetos no GitHub
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 