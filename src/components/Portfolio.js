import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Portfolio.css';

const Portfolio = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      id: 1,
      title: 'Domma Electra',
      description: 'Site institucional para empresa de automação residencial',
      image: '/images/dommaelectrasite.webp',
      url: 'https://www.dommaelectra.com.br'
    },
    {
      id: 2,
      title: 'Cris Psicólogo',
      description: 'Site profissional para psicólogo',
      image: '/images/crispsicologosite.webp',
      url: 'https://www.crispsicologo.com.br'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Portfólio
        </motion.h2>
        
        <motion.div 
          className="portfolio-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="portfolio-item"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
                             {project.url ? (
                 <>
                   <div className="portfolio-image">
                     <img
                       src={project.image}
                       alt={`Preview do site ${project.title}`}
                       className="portfolio-preview-img"
                       onError={(e) => {
                         e.target.style.display = 'none';
                         e.target.nextSibling.style.display = 'flex';
                       }}
                     />
                     <div className="portfolio-placeholder" style={{ display: 'none' }}>
                       {project.title}
                     </div>
                     <div className="portfolio-overlay">
                       <motion.a
                         href={project.url}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="portfolio-link"
                         whileHover={{ 
                           scale: 1.05,
                           transition: { duration: 0.3 }
                         }}
                       >
                         <span className="portfolio-url">Ver site completo →</span>
                       </motion.a>
                     </div>
                   </div>
                   <div className="portfolio-info">
                     <h3>{project.title}</h3>
                     <p>{project.description}</p>
                   </div>
                 </>
               ) : (
                 <>
                   <div className="portfolio-image">
                     <div className="portfolio-placeholder">{project.image}</div>
                   </div>
                   <div className="portfolio-info">
                     <h3>{project.title}</h3>
                     <p>{project.description}</p>
                   </div>
                 </>
               )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 