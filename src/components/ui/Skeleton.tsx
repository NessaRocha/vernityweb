interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
}

export default function Skeleton({ 
  className = "", 
  width = "100%", 
  height = "1rem", 
  rounded = true 
}: SkeletonProps) {
  const widthClass = typeof width === 'number' ? `w-${width}` : `w-[${width}]`;
  const heightClass = typeof height === 'number' ? `h-${height}` : `h-[${height}]`;
  
  return (
    <div 
      className={`
        bg-gray-700 animate-pulse 
        ${rounded ? 'rounded' : ''} 
        ${widthClass} 
        ${heightClass} 
        ${className}
      `}
      style={{
        width: typeof width === 'string' && width.includes('%') ? width : undefined,
        height: typeof height === 'string' && height.includes('%') ? height : undefined,
      }}
    />
  );
}
