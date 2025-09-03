import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
}

export default function Container({ 
  children, 
  size = "lg",
  className = "" 
}: ContainerProps) {
  const sizeClasses = {
    sm: "max-w-3xl",
    md: "max-w-4xl", 
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full"
  };
  
  const classes = `mx-auto px-4 ${sizeClasses[size]} ${className}`;
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
}
