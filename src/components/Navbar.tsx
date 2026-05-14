import React from 'react';
import { NAVIGATION } from '../constants';
import { GlitchText } from './GlitchText';
import { motion } from 'motion/react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 bg-brand-card border-b-2 border-brand-red z-50">
      <div className="text-2xl font-black tracking-tighter italic bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent [filter:drop-shadow(2px_2px_#FF4655)]">
        EST_YT17
      </div>

      <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
        {NAVIGATION.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {link.label}
          </a>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-brand-red px-6 py-2 text-[10px] font-black uppercase tracking-tighter shadow-[0_0_15px_rgba(255,70,85,0.6)] animate-pulse"
      >
        Subscribe
      </motion.button>
    </nav>
  );
};
