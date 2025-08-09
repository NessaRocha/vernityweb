import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle = React.forwardRef<HTMLHeadingElement, SectionTitleProps>(
  ({ children, className }, ref) => {
    return (
      <motion.h2
        ref={ref}
        className={`section-title ${className || ''}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.h2>
    );
  }
);

SectionTitle.displayName = 'SectionTitle';

export { SectionTitle };
