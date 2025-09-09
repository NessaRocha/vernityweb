import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({ 
  children, 
  href, 
  variant = "primary", 
  size = "md", 
  className = "", 
  onClick,
  type = "button",
  disabled = false
}: ButtonProps) {
  const baseClasses = "font-semibold rounded-lg transition-colors inline-block";
  
  const variantClasses = {
    primary: "bg-[#53389e] text-white hover:bg-[#4a3290] active:bg-[#4a3290] focus:bg-[#4a3290] focus:outline-none focus:ring-2 focus:ring-[#4a3290] focus:ring-offset-2",
    secondary: "bg-white text-blue-600 hover:bg-gray-100 active:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-50 focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button 
      type={type}
      disabled={disabled}
      onClick={onClick} 
      className={classes}
    >
      {children}
    </button>
  );
}
