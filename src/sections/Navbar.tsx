'use client'

import Link from "next/link";
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavbarProps } from '@/views/homepage/types';

export default function Navbar({ data }: { data: NavbarProps }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 lg:bg-black z-50" style={{ height: '110px' }}>
      <div className="container mx-auto px-2 sm:px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo à esquerda (apenas desktop) */}
          <Link href="#home" className="hidden lg:flex items-center z-50">
            <Image
              src={data.logo.src}
              alt={data.logo.alt}
              width={150}
              height={50}
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Navegação Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {data.navItems.slice(0, -1).map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="text-white hover:text-red-500 transition-colors font-medium whitespace-nowrap"
                aria-label={`Navegar para ${item.label}`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href={data.navItems[data.navItems.length - 1].href}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium whitespace-nowrap"
              aria-label="Entrar em contato via WhatsApp"
            >
              {data.navItems[data.navItems.length - 1].label}
            </Link>
          </div>

          {/* Menu Hamburger (apenas mobile) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden z-50 p-2 text-white hover:text-red-500 transition-colors ml-auto focus-visible"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
              }
              if (e.key === 'Escape' && isMenuOpen) {
                closeMenu();
              }
            }}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className="w-6 h-0.5 bg-current block"></span>
              <span className="w-6 h-0.5 bg-current block"></span>
              <span className="w-6 h-0.5 bg-current block"></span>
            </div>
          </button>
        </div>

        {/* Menu Mobile Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden absolute top-full right-4 bg-black/95 backdrop-blur-sm rounded-lg shadow-lg min-w-48"
            >
              <div className="px-4 py-4 space-y-2">
                {data.navItems.map((item, index) => {
                  const isLastItem = index === data.navItems.length - 1;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={`block w-full text-left py-2 px-3 rounded transition-colors text-sm font-medium focus-visible ${
                          isLastItem
                            ? 'bg-red-500 text-white hover:bg-red-600 text-center'
                            : 'text-white hover:text-red-500 hover:bg-white/10'
                        }`}
                        aria-label={isLastItem ? 'Entrar em contato via WhatsApp' : `Navegar para ${item.label}`}
                        onKeyDown={(e) => {
                          if (e.key === 'Escape') {
                            closeMenu();
                          }
                        }}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
