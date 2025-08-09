import React from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'skill' | 'tech';
  className?: string;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant = 'skill', className }, ref) => {
    const baseStyles = 'px-3 py-1 text-sm rounded-full font-medium transition-all duration-300';
    
    const variants = {
      skill: 'bg-red-500 hover:bg-red-700 text-white cursor-default',
      tech: 'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 hover:border-red-400/50'
    };

    return (
      <motion.span
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className || ''}`}
        whileHover={{ scale: 1.05 }}
      >
        {children}
      </motion.span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
