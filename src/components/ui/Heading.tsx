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
  
  // Removido CSS inline com clamp() para melhor performance no Lighthouse
  
  switch (level) {
    case 1:
      return <h1 className={classes}>{children}</h1>;
    case 2:
      return <h2 className={classes}>{children}</h2>;
    case 3:
      return <h3 className={classes}>{children}</h3>;
    case 4:
      return <h4 className={classes}>{children}</h4>;
    case 5:
      return <h5 className={classes}>{children}</h5>;
    case 6:
      return <h6 className={classes}>{children}</h6>;
    default:
      return <h1 className={classes}>{children}</h1>;
  }
}
