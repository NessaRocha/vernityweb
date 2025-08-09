'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Badge } from '@/components/ui'
import { getIcon } from '@/components/ui/icons'
import { AboutProps } from '@/views/homepage/types'

export default function About({ data }: { data: AboutProps }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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
            {data.title.text} <span className="text-gradient">{data.title.highlight}</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Text Content - 2/3 width */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              {data.paragraphs.map((paragraph) => (
                <motion.p 
                  key={paragraph}
                  className="text-lg text-gray-300 leading-relaxed mb-6"
                  variants={itemVariants}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            {/* Skills and CTA - 1/3 width */}
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-white">
                {data.skills.title.text} <span className="text-gradient">{data.skills.title.highlight}</span>
              </h3>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {data.skills.list.map((skill) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: data.skills.list.indexOf(skill) * 0.1 }}
                  >
                    <Badge variant="skill">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              {/* GitHub Button */}
              <motion.a
                href={data.githubButton.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {getIcon(data.githubButton.icon, "w-5 h-5 mr-2")}
                {data.githubButton.text}
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
