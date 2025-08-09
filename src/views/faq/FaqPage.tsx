'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { SectionTitle } from '@/components/ui'

interface FaqItem {
  id: string
  question: string
  answer: string
}

const faqData: FaqItem[] = [
  {
    id: '1',
    question: 'Quanto tempo leva para desenvolver um site?',
    answer: 'O tempo de desenvolvimento varia conforme a complexidade do projeto. Sites simples podem levar de 1-2 semanas, enquanto projetos mais complexos podem levar de 4-8 semanas.'
  },
  {
    id: '2',
    question: 'Vocês fazem manutenção do site após a entrega?',
    answer: 'Sim! Oferecemos planos de manutenção mensal que incluem atualizações de segurança, backup, monitoramento e pequenas alterações de conteúdo.'
  },
  {
    id: '3',
    question: 'O site será responsivo (mobile-friendly)?',
    answer: 'Absolutamente! Todos os nossos sites são desenvolvidos com design responsivo, garantindo uma experiência perfeita em dispositivos móveis, tablets e desktops.'
  },
  {
    id: '4',
    question: 'Vocês trabalham com SEO?',
    answer: 'Sim, aplicamos as melhores práticas de SEO técnico durante o desenvolvimento, incluindo otimização de velocidade, meta tags, estrutura de dados e muito mais.'
  }
]

export default function FaqPage() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SectionTitle 
            title="Perguntas"
            highlight="Frequentes"
            subtitle="Tire suas dúvidas sobre nossos serviços"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full text-left p-6 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {item.question}
                  </h3>
                  <motion.span
                    animate={{ rotate: openItem === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-red-500 text-xl font-bold"
                  >
                    +
                  </motion.span>
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openItem === item.id ? 'auto' : 0,
                  opacity: openItem === item.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0">
                  <p className="text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
