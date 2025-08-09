'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui'
import { getIcon } from '@/components/ui/icons'
import { ServicesProps } from '@/views/homepage/types'

export default function Services({ data }: { data: ServicesProps }) {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="services" className="py-20 bg-black">
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
            <span className="text-gradient">{data.title.text}</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  borderColor: '#ef4444',
                  boxShadow: '0 20px 40px rgba(239, 68, 68, 0.2)'
                }}
              >
                <Card
                  icon={getIcon(service.icon)}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
