import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, icon, title, description, className }, ref) => {
    const baseStyles = 'bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-red-500 transition-all duration-300 group relative overflow-hidden';
    
    return (
      <motion.div
        ref={ref}
        className={`${baseStyles} ${className || ''}`}
        whileHover={{ 
          y: -10,
          borderColor: '#ef4444',
          boxShadow: '0 20px 40px rgba(239, 68, 68, 0.2)'
        }}
      >
        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Icon */}
        {icon && (
          <motion.div 
            className="mb-6 flex justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-red-500 group-hover:text-white transition-colors duration-300">
              {icon}
            </div>
          </motion.div>
        )}
        
        {/* Debug: Mostrar se ícone existe */}
        {!icon && (
          <div className="mb-6 flex justify-center">
            <div className="text-red-500 text-2xl">🔍</div>
          </div>
        )}

        {/* Content */}
        <div className="relative z-10">
          {title && (
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-gray-300 leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </div>

        {/* Top Border Animation */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

export { Card };
