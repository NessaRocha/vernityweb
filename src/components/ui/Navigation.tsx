"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };







  return (
    <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md z-50 py-4 shadow-lg">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo e Nome - Visível apenas no Desktop */}
          <Link href="/" className="hidden lg:flex items-center space-x-3">
            <Image 
              src="/assets/icons/vernety_logo.webp"
              alt="Vernity Web" 
              width={80}
              height={80}
              className="h-20 w-auto"
              priority
              fetchPriority="high"
              loading="eager"
              decoding="sync"
            />
            <span className="text-white font-bold text-2xl tracking-wide font-sans">
              Vernity Web
            </span>
          </Link>
          
          {/* Menu hambúrguer à direita no mobile (padrão iOS) */}
          <div className="lg:hidden flex justify-end">
            <button
              className="text-white p-2 bg-black/60 rounded-lg hover:bg-black/80 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls={isMobileMenuOpen ? "mobile-menu" : undefined}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
                      <nav aria-label="Primary">
              {/* Desktop Navigation */}
              <div className="hidden lg:block">
                <ul className="flex items-center space-x-8">
                                     <li>
                     <a 
                       href="#hero" 
                       className="text-white hover:text-red-400 hover:scale-105 transition-all duration-200 cursor-pointer relative group"
                     >
                       Início
                       <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-200"></span>
                     </a>
                   </li>
                   <li>
                     <a 
                       href="#about" 
                       className="text-white hover:text-red-400 hover:scale-105 transition-all duration-200 cursor-pointer relative group"
                     >
                       Sobre
                       <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-200"></span>
                     </a>
                   </li>
                   <li>
                     <a 
                       href="#services" 
                       className="text-white hover:text-red-400 hover:scale-105 transition-all duration-200 cursor-pointer relative group"
                     >
                       Serviços
                       <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-200"></span>
                     </a>
                   </li>
                   <li>
                     <a 
                       href="#portfolio" 
                       className="text-white hover:text-red-400 hover:scale-105 transition-all duration-200 cursor-pointer relative group"
                     >
                       Portfólio
                       <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-200"></span>
                     </a>
                   </li>
                  <li>
                    <a 
                      href="#contact" 
                      className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-colors font-semibold"
                    >
                      Contato
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="md:hidden bg-gray-900 mt-4 rounded-lg shadow-lg"
            aria-label="Mobile navigation menu"
          >
            <div className="px-4 py-6 space-y-4">
                             <a
                 href="#hero"
                className="block text-white hover:text-gray-300 transition-colors py-2"
                onClick={closeMobileMenu}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    closeMobileMenu();
                  }
                }}
              >
                Início
              </a>
              <a
                href="#about"
                className="block text-white hover:text-gray-300 transition-colors py-2"
                onClick={closeMobileMenu}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    closeMobileMenu();
                  }
                }}
              >
                Sobre
              </a>
              <a
                href="#services"
                className="block text-white hover:text-gray-300 transition-colors py-2"
                onClick={closeMobileMenu}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    closeMobileMenu();
                  }
                }}
              >
                Serviços
              </a>
              <a
                href="#portfolio"
                className="block text-white hover:text-gray-300 transition-colors py-2"
                onClick={closeMobileMenu}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    closeMobileMenu();
                  }
                }}
              >
                Portfólio
              </a>
                             <a
                 href="#contact"
                className="block bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-colors font-semibold text-center"
                onClick={closeMobileMenu}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    closeMobileMenu();
                  }
                }}
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
