'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { getIcon } from '@/components/ui/icons'
import { ContactProps } from '@/views/homepage/types'

export default function Contact({ data }: { data: ContactProps }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="contact" className="py-20 bg-black">
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
            {data.title.text} <motion.a 
              href="https://wa.me/5551996138467?text=Olá! Gostaria de conversar sobre um projeto web."
              target="_blank"
              rel="noopener noreferrer"
              className="text-gradient hover:text-red-400 transition-colors duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {data.title.highlight}
            </motion.a>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text and Contact Info */}
            <motion.div variants={itemVariants}>
              <motion.h3 
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                variants={itemVariants}
              >
                {data.heading}
              </motion.h3>
              
              <motion.p 
                className="text-lg text-gray-300 mb-8 leading-relaxed"
                variants={itemVariants}
              >
                {data.description}
              </motion.p>

              {/* Contact Details */}
              <motion.div className="space-y-4" variants={itemVariants}>
                {data.contactInfo.map((info) => (
                  <div key={info.text} className="flex items-center text-gray-300">
                    <div className="mr-3 text-red-500">
                      {getIcon(info.icon, "w-5 h-5")}
                    </div>
                    <span>{info.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - CTA Buttons */}
            <motion.div className="flex flex-col gap-6" variants={itemVariants}>
              {data.buttons.map((button) => (
                <motion.a
                  key={button.text}
                  href={button.href}
                  target={button.variant === 'whatsapp' ? '_blank' : undefined}
                  rel={button.variant === 'whatsapp' ? 'noopener noreferrer' : undefined}
                  className={`px-8 py-4 font-bold text-lg rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl ${
                    button.variant === 'whatsapp' 
                      ? 'bg-red-500 hover:bg-red-700 text-white' 
                      : 'bg-white hover:bg-gray-100 text-black border-2 border-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {getIcon(button.icon, "w-6 h-6 mr-3")}
                  {button.text}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
