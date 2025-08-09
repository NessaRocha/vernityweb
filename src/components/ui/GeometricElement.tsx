import React from 'react';
import { motion } from 'framer-motion';

interface GeometricElementProps {
  className?: string;
  animation?: {
    x?: number[];
    y?: number[];
    scale?: number[];
    rotate?: number[];
    duration?: number;
  };
}

interface AnimateProps {
  x?: number[];
  y?: number[];
  scale?: number[];
  rotate?: number[];
}

const GeometricElement = React.forwardRef<HTMLDivElement, GeometricElementProps>(
  ({ className, animation }, ref) => {
    const defaultAnimation = {
      x: [0, 15, 0],
      y: [0, -12, 0],
      rotate: [0, 360, 0],
      duration: 5.2
    };

    const finalAnimation = animation || defaultAnimation;

    const animateProps: AnimateProps = {
      x: finalAnimation.x,
      y: finalAnimation.y,
    };

    if ('scale' in finalAnimation && finalAnimation.scale) {
      animateProps.scale = finalAnimation.scale;
    }

    if ('rotate' in finalAnimation && finalAnimation.rotate) {
      animateProps.rotate = finalAnimation.rotate;
    }

    return (
      <motion.div
        ref={ref}
        className={`geometric-element absolute ${className || ''}`}
        animate={animateProps}
        transition={{
          duration: finalAnimation.duration,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    );
  }
);

GeometricElement.displayName = 'GeometricElement';

export { GeometricElement };
