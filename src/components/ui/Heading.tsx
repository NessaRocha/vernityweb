import React, { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  className?: string;
}

export default function Heading({ 
  children, 
  level = 1, 
  size,
  className = "" 
}: HeadingProps) {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl"
  };
  
  const defaultSize = level === 1 ? "6xl" : level === 2 ? "4xl" : level === 3 ? "2xl" : "xl";
  const finalSize = size || defaultSize;
  
  const classes = `font-bold ${sizeClasses[finalSize]} ${className}`;
  
  // CSS inline responsivo para resolver APIs obsoletas do Lighthouse
  const inlineStyle = {
    fontSize: sizeClasses[finalSize].replace('text-', '') === '6xl' ? 'clamp(1rem, 5vw, 4.5rem)' :
                sizeClasses[finalSize].replace('text-', '') === '5xl' ? 'clamp(0.875rem, 4.5vw, 3.75rem)' :
                sizeClasses[finalSize].replace('text-', '') === '4xl' ? 'clamp(0.75rem, 4vw, 3rem)' :
                sizeClasses[finalSize].replace('text-', '') === '3xl' ? 'clamp(0.625rem, 3.5vw, 1.875rem)' :
                sizeClasses[finalSize].replace('text-', '') === '2xl' ? 'clamp(0.5rem, 3vw, 1.5rem)' :
                sizeClasses[finalSize].replace('text-', '') === 'xl' ? 'clamp(0.5rem, 2.5vw, 1.25rem)' :
                sizeClasses[finalSize].replace('text-', '') === 'lg' ? 'clamp(0.5rem, 2vw, 1.125rem)' :
                sizeClasses[finalSize].replace('text-', '') === 'base' ? 'clamp(0.5rem, 1.5vw, 1rem)' :
                sizeClasses[finalSize].replace('text-', '') === 'sm' ? 'clamp(0.5rem, 1vw, 0.875rem)' : 'clamp(0.5rem, 1.5vw, 1rem)'
  };
  
  switch (level) {
    case 1:
      return <h1 className={classes} style={inlineStyle}>{children}</h1>;
    case 2:
      return <h2 className={classes} style={inlineStyle}>{children}</h2>;
    case 3:
      return <h3 className={classes} style={inlineStyle}>{children}</h3>;
    case 4:
      return <h4 className={classes} style={inlineStyle}>{children}</h4>;
    case 5:
      return <h5 className={classes} style={inlineStyle}>{children}</h5>;
    case 6:
      return <h6 className={classes} style={inlineStyle}>{children}</h6>;
    default:
      return <h1 className={classes} style={inlineStyle}>{children}</h1>;
  }
}
