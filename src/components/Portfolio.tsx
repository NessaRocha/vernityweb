'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: 'Domma Electra',
      description: 'Site institucional para empresa de automação residencial, com design moderno e foco em conversão.',
      image: '/images/dommaelectrasite.webp',
      url: 'https://www.dommaelectra.com.br',
      tech: ['React', 'Next.js', 'Tailwind CSS']
    },
    {
      title: 'Cris Psicólogo',
      description: 'Site profissional para psicólogo, com blog integrado e sistema de agendamento.',
      image: '/images/crispsicologosite.webp',
      url: 'https://www.crispsicologo.com.br',
      tech: ['WordPress', 'PHP', 'CSS3']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="portfolio" className="py-20 bg-[#111111]">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="section-title"
            variants={itemVariants}
          >
            Meu <span className="text-gradient">Portfólio</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden group hover:border-red-500 transition-all duration-500 relative"
                variants={itemVariants}
                whileHover={{ 
                  y: -15,
                  scale: 1.02,
                  boxShadow: '0 25px 50px rgba(239, 68, 68, 0.3)'
                }}
              >
                {/* Red Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Preview do site ${project.title}`}
                    fill
                    className="object-cover group-hover:scale-125 transition-transform duration-700"
                    onError={(e) => {
                      console.error('Erro ao carregar imagem:', e.currentTarget.src)
                    }}
                  />
                  
                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold text-lg rounded-xl shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-red-400 hover:border-red-300"
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: '0 10px 30px rgba(239, 68, 68, 0.5)'
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="flex items-center">
                        Ver site completo
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-red-500/20 text-red-400 text-sm rounded-full border border-red-500/30 group-hover:bg-red-500/30 group-hover:border-red-400/50 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Top Border Animation */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
