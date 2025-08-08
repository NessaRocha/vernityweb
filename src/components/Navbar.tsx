'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#services', label: 'Serviços' },
    { href: '#portfolio', label: 'Portfólio' },
    { href: '#contact', label: 'Contato' }
  ]

  return (
    <motion.nav
                  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black w-full`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
                    <div className="w-full px-48 sm:px-72 lg:px-[28rem]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-32">
                  {/* Logo - Primeira coluna */}
                  <div className="flex justify-start">
                    <motion.div
                      className="flex items-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Image
                        src="/images/logo.svg"
                        alt="Vernity Web"
                        width={300}
                        height={100}
                        className="h-24 md:h-28 w-auto object-contain"
                        onError={(e) => {
                          console.error('Erro ao carregar logo:', e.currentTarget.src)
                        }}
                        onLoad={() => {
                          console.log('Logo carregada com sucesso')
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Menu - Segunda coluna */}
                  <div className="flex justify-end">
                    <ul className="hidden md:flex items-center space-x-8">
                      {navItems.map((item, index) => (
                        <motion.li
                          key={item.href}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <a
                            href={item.href}
                            className="text-white font-medium text-lg transition-colors duration-300 hover:text-red-500 relative group"
                          >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                                    </div>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                  className="md:hidden flex flex-col space-y-1 p-2 absolute top-4 right-4"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </motion.button>

                {/* Mobile Menu */}
                <motion.div
                  className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    height: isMenuOpen ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="py-4 space-y-4 bg-black rounded-lg mt-2">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-white font-medium text-lg transition-colors duration-300 hover:text-red-500 hover:bg-white/10 rounded"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.nav>
  )
}
