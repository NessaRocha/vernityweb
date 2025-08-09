import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'hero-primary' | 'hero-outline' | 'about' | 'portfolio';
  href?: string;
  icon?: React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ children, variant = 'hero-primary', href, icon, className }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-300';
    
    const variants = {
      'hero-primary': 'px-6 sm:px-8 py-3 sm:py-4 bg-red-500 hover:bg-red-600 text-white text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl',
      'hero-outline': 'px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black text-base sm:text-lg rounded-xl',
      'about': 'px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg hover:scale-105 shadow-lg cursor-pointer',
      'portfolio': 'px-8 py-4 bg-red-500 hover:bg-red-600 text-white text-lg rounded-xl shadow-2xl transform hover:scale-110 border-2 border-red-400 hover:border-red-300'
    };

    const buttonContent = (
      <>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </>
    );

    const buttonClasses = `${baseStyles} ${variants[variant]} ${className || ''}`;

    return (
      <motion.a
        ref={ref}
        href={href}
        className={`${buttonClasses} focus-visible`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        target="_blank"
        rel="noopener noreferrer"
        role="button"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (href) {
              window.open(href, '_blank', 'noopener,noreferrer');
            }
          }
        }}
      >
        {buttonContent}
      </motion.a>
    );
  }
);

Button.displayName = 'Button';

export { Button };
