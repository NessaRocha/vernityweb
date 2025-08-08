'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative bg-black overflow-hidden pt-20">
                    {/* Background Effects - 50% vermelho, 50% cinza */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 via-red-800/20 to-gray-900/30"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-red-800/15 via-gray-800/10 to-[#191919]"></div>
              <div className="absolute inset-0 bg-[#191919]/50"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="text-center lg:text-left lg:pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white">DESENVOLVIMENTO</span><br />
              <span className="text-red-500">QUE TRADUZ</span><br />
              <span className="text-white">SUA MARCA EM</span><br />
              <span className="text-red-500">PERFORMANCE,</span><br />
              <span className="text-white">ELEGÂNCIA E</span><br />
              <span className="text-red-500">RESULTADOS.</span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Sou uma desenvolvedora web profissional especializada em criar soluções digitais únicas.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="#portfolio"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-red-500 hover:bg-red-600 text-white font-bold text-base sm:text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Portfólio
              </motion.a>

              <motion.a
                href="https://wa.me/5551996138467?text=Olá! Gostaria de conversar sobre um projeto web para minha empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold text-base sm:text-lg rounded-xl transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Fale Comigo
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Image Section - Replicando estrutura do inspetor */}
          <motion.div 
            className="hero-image flex justify-center items-center relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Profile Container */}
            <div className="profile-container relative">
              {/* Geometric Elements - quadrados mais transparentes + 2 sobrepostos */}
              <motion.div
                className="geometric-element absolute top-12 -left-12 w-24 h-24 bg-gray-500/14 rounded-sm border border-gray-400/30 shadow-md shadow-gray-500/10"
                animate={{
                  x: [0, 15, 0],
                  y: [0, -12, 0],
                  rotate: [0, 360, 0],
                }}
                transition={{
                  duration: 5.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="geometric-element absolute top-1/3 -left-8 w-16 h-16 bg-red-600/18 rounded-sm border border-red-500/35 shadow-md shadow-red-600/12"
                animate={{
                  x: [0, -12, 0],
                  y: [0, 8, 0],
                  rotate: [0, -360, 0],
                }}
                transition={{
                  duration: 3.9,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="geometric-element absolute top-1/2 -left-16 w-32 h-32 bg-red-600/21 rounded-sm border border-red-500/40 shadow-md shadow-red-600/15"
                animate={{
                  x: [0, -20, 0],
                  y: [0, 15, 0],
                  rotate: [0, 360, 0],
                }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="geometric-element absolute bottom-1/3 left-80 w-20 h-20 bg-red-600/14 rounded-sm border border-red-500/30 shadow-md shadow-red-600/10"
                animate={{
                  x: [0, 10, 0],
                  y: [0, -8, 0],
                  rotate: [0, -360, 0],
                }}
                transition={{
                  duration: 5.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />







              {/* Círculos na direita */}
              <motion.div
                className="geometric-element absolute -top-12 -right-12 w-40 h-40 bg-red-500/40 rounded-full border border-red-500/80 shadow-lg shadow-red-500/30"
                animate={{
                  x: [0, -40, 0],
                  y: [0, 30, 0],
                  scale: [1, 1.3, 1],
                  rotate: [0, 360, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="geometric-element absolute -bottom-6 -left-6 w-28 h-28 bg-gray-500/50 rounded-full border border-gray-500/90 shadow-lg shadow-gray-500/40"
                animate={{
                  x: [0, 35, 0],
                  y: [0, -25, 0],
                  scale: [1, 0.7, 1],
                  rotate: [0, -360, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Profile Image */}
              <motion.div 
                className="profile-image relative w-96 h-[500px] md:w-[500px] md:h-[650px] lg:w-[550px] lg:h-[700px]"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Rounded shadow behind image */}
                <div className="absolute inset-0 bg-gray-800/30 rounded-3xl transform rotate-1 scale-105 blur-sm"></div>
                <Image
                  src="/images/banner.png"
                  alt="Vernity Web - Desenvolvedora Web"
                  fill
                  className="profile-img object-cover shadow-lg"
                  priority
                  onError={(e) => {
                    console.error('Erro ao carregar imagem:', e.currentTarget.src)
                  }}
                  onLoad={() => {
                    console.log('Imagem carregada com sucesso')
                  }}
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </motion.div>

              {/* Profile Placeholder (hidden) */}
              <div className="profile-placeholder hidden">
                <svg width="200" height="200" viewBox="0 0 200 200">
                  {/* SVG content would go here */}
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
