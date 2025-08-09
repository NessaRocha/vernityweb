import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const AnimatedImage = React.forwardRef<HTMLDivElement, AnimatedImageProps>(
  ({ src, alt, className, priority = false }, ref) => {
    return (
      <motion.div 
        ref={ref}
        className={`relative ${className || ''}`}
        animate={{
          y: [0, -8, 0],
          rotate: [0, 0.8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
                 {/* Shadow behind image */}
         <div className="absolute bg-gray-800/25 blur-sm" style={{ 
           top: '4px', 
           left: '4px', 
           width: '440px', 
           height: '560px' 
         }}></div>
        
        <Image
          src={src}
          alt={alt}
          width={440}
          height={560}
          className="object-cover shadow-lg"
          priority={priority}
        />
        
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </motion.div>
    );
  }
);

AnimatedImage.displayName = 'AnimatedImage';

export { AnimatedImage };
