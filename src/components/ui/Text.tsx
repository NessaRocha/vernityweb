import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  as?: "p" | "span" | "div";
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
  color?: "default" | "muted" | "primary" | "white";
  weight?: "normal" | "medium" | "semibold" | "bold";
  className?: string;
}

export default function Text({ 
  children, 
  as = "p",
  size = "base",
  color = "default",
  weight = "normal",
  className = "" 
}: TextProps) {
  const Tag = as;
  
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl"
  };
  
  const colorClasses = {
    default: "text-gray-900",
    muted: "text-gray-600",
    primary: "text-blue-600",
    white: "text-white"
  };
  
  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold"
  };
  
  const classes = `${sizeClasses[size]} ${colorClasses[color]} ${weightClasses[weight]} ${className}`;
  
  return (
    <Tag className={classes}>
      {children}
    </Tag>
  );
}
