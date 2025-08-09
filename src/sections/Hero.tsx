'use client'

import { motion } from 'framer-motion'
import { Button, GeometricElement, AnimatedImage } from '@/components/ui'
import { getIcon } from '@/components/ui/icons'
import { HeroProps } from '@/views/homepage/types'

export default function Hero({ data }: { data: HeroProps }) {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden" style={{ paddingTop: '60px', background: 'linear-gradient(to right, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.08) 20%, rgba(17, 17, 17, 0.9) 50%, #111111 100%)' }}>
      {/* Background: gradiente vermelho para cinza #111111 */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="hero-grid max-w-7xl mx-auto">
          {/* Text Content - Lado Esquerdo */}
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
            >
              {data.title.lines.map((line) => (
                <span key={line.text} className={line.color === 'red' ? 'text-red-500' : 'text-white'}>
                  {line.text}
                  {data.title.lines.indexOf(line) < data.title.lines.length - 1 && <br />}
                </span>
              ))}
            </motion.h1>
            
                        <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.4)' }}
            >
              {data.description.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < data.description.split('\n').length - 1 && <br />}
                </span>
              ))}
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {data.buttons.map((button) => (
                <Button 
                  key={button.text}
                  variant={button.variant} 
                  href={button.href}
                  icon={button.icon ? getIcon(button.icon) : undefined}
                >
                  {button.text}
                </Button>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image Section - Lado Direito */}
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full max-w-xl">
              {/* Geometric Elements */}
              {data.geometricElements.map((element) => (
                <GeometricElement
                  key={element.className}
                  className={element.className}
                  animation={element.animation}
                />
              ))}

              {/* Profile Image - banner.png */}
              <AnimatedImage
                src={data.image.src}
                alt={data.image.alt}
                className="w-full h-auto object-cover rounded-3xl shadow-2xl"
                priority={true}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
