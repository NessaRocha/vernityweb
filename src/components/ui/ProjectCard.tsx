import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

export const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ title, description, image, url }, ref) => {
    return (
      <motion.div
        ref={ref}
        className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden group hover:border-red-500 transition-all duration-500 relative"
        whileHover={{ 
          y: -15,
          scale: 1.02,
          boxShadow: '0 25px 50px rgba(239, 68, 68, 0.3)'
        }}
      >
        {/* Red Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={`Preview do site ${title}`}
            fill
            className="object-cover group-hover:scale-125 transition-transform duration-700"
            onError={(e) => {
              console.error('Erro ao carregar imagem:', e.currentTarget.src)
            }}
          />
          
          {/* Enhanced Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
            <motion.a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold text-lg rounded-xl shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-red-400 hover:border-red-300"
              whileHover={{ 
                scale: 1.1,
                boxShadow: '0 10px 30px rgba(239, 68, 68, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center">
                Ver site completo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </motion.a>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 lg:p-8 relative z-10">
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>

        </div>

        {/* Top Border Animation */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </motion.div>
    );
  }
);

ProjectCard.displayName = 'ProjectCard';
