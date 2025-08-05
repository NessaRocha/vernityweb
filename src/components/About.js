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
                📁 Ver meus projetos no GitHub
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 