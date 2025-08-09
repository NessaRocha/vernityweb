import React from 'react';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isMobile?: boolean;
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, children, className, onClick, isMobile = false }, ref) => {
    const baseStyles = isMobile 
      ? 'block px-4 py-3 text-white font-medium text-lg transition-colors duration-300 hover:text-red-500 hover:bg-white/10 rounded'
      : 'text-white font-medium text-sm md:text-base lg:text-lg transition-colors duration-300 hover:text-red-500 relative group px-2 md:px-3 lg:px-4 py-2';

    return (
      <motion.a
        ref={ref}
        href={href}
        className={`${baseStyles} ${className || ''}`}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
        {!isMobile && (
          <span className="absolute -bottom-1 left-2 right-2 md:left-3 md:right-3 lg:left-4 lg:right-4 h-0.5 bg-red-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
        )}
      </motion.a>
    );
  }
);

NavLink.displayName = 'NavLink';

export { NavLink };
