import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Monitor, Palette, Gauge } from "lucide-react";
import './Services.css';

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const services = [
    {
      id: 1,
      title: 'Arquitetura Web Sob Medida',
      description: 'Sites rápidos, seguros e alinhados ao seu propósito digital.',
      icon: <Monitor className="service-icon-svg" />
    },
    {
      id: 2,
      title: 'Design Centrado no Usuário',
      description: 'Experiências visuais que encantam e facilitam a navegação.',
      icon: <Palette className="service-icon-svg" />
    },
    {
      id: 3,
      title: 'Alta Performance e Resultados',
      description: 'Otimizações técnicas para velocidade, SEO e conversão.',
      icon: <Gauge className="service-icon-svg" />
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
    <section id="services" className="services">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Serviços
        </motion.h2>
        
        <motion.div 
          className="services-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 