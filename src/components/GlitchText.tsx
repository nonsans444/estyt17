import React from 'react';
import { motion } from 'motion/react';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "", as: Component = "span" }) => {
  return (
    <Component className={`relative group inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute top-0 left-0 -z-10 text-brand-red opacity-0 group-hover:opacity-70 group-hover:translate-x-1"
        initial={false}
        animate={{ x: [0, -2, 2, -1, 0] }}
        transition={{ repeat: Infinity, duration: 0.15 }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 -z-10 text-cyan-400 opacity-0 group-hover:opacity-70 group-hover:-translate-x-1"
        initial={false}
        animate={{ x: [0, 2, -2, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.2 }}
      >
        {text}
      </motion.span>
    </Component>
  );
};
