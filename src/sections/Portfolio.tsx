'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ProjectCard } from '@/components/ui'
import { PortfolioProps } from '@/views/homepage/types'

export default function Portfolio({ data }: { data: PortfolioProps }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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
            {data.title.text} <span className="text-gradient">{data.title.highlight}</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {data.projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -15,
                  scale: 1.02,
                  boxShadow: '0 25px 50px rgba(239, 68, 68, 0.3)'
                }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  url={project.url}
                  tech={project.tech}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
