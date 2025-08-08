'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skills = [
    'React.js', 'Node.js', 'WordPress', 'Shopify', 'JavaScript',
    'HTML5', 'CSS3', 'Responsive Design', 'UI/UX Design', 'SEO',
    'Acessibilidade'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="py-20 bg-[#111111]">
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
            Sobre <span className="text-gradient">Mim</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Text Content - 2/3 width */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed mb-6"
                variants={itemVariants}
              >
                Tenho uma trajetória sólida no desenvolvimento web, transformando código em experiências digitais significativas para usuários e clientes. Minha missão vai além de projetos funcionais - busco criar soluções que sejam envolventes desde o primeiro contato e consistentes com os objetivos de negócio.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed mb-6"
                variants={itemVariants}
              >
                Especializo-me em tecnologias como React, Node.js, WordPress e Shopify, além de expertise em UX, design responsivo e melhores práticas para performance, acessibilidade e SEO. Foco em criar interfaces intuitivas, sistemas escaláveis e projetos customizados, do código ao comportamento do usuário.
              </motion.p>

              <motion.p 
                className="text-lg text-gray-300 leading-relaxed"
                variants={itemVariants}
              >
                Cada linha de código que escrevo incorpora estratégia, atenção à experiência do usuário e uma abordagem inovadora. Meu foco, do planejamento à entrega, é consistentemente construir experiências digitais completas, otimizadas e orientadas pela identidade.
              </motion.p>
            </motion.div>

            {/* Skills and CTA - 1/3 width */}
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Minhas <span className="text-gradient">Habilidades</span>
              </h3>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white text-sm rounded-full font-medium transition-colors duration-300 cursor-default"
                    variants={itemVariants}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* GitHub Button */}
              <motion.a
                href="https://github.com/NessaRocha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                Ver meus projetos no GitHub
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
