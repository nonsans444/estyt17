import React from 'react';
import { NAVIGATION, YT_URL } from '../constants';
import { motion } from 'motion/react';
import { Sun, Moon, Globe } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme, language, setLanguage, t } = useAppContext();

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-brand-card/90 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-6">
        <div className="flex items-center gap-6">
        <div className="text-xl md:text-2xl font-black tracking-tighter italic bg-gradient-to-r from-brand-white via-gray-400 to-brand-neon bg-clip-text text-transparent [filter:drop-shadow(0_0_8px_rgba(0,243,255,0.3))] cursor-default">
          EST_YT17
        </div>
      </div>

      <div className="hidden lg:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
        {NAVIGATION.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="hover:text-brand-neon transition-colors cursor-pointer"
          >
            {t(`nav.${link.label.toLowerCase()}`)}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        {/* Language Switcher */}
        <button 
          onClick={() => setLanguage(language === 'en' ? 'hr' : 'en')}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-white/70 hover:text-brand-neon transition-colors"
        >
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{language.toUpperCase()}</span>
        </button>

        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className="p-2 text-brand-white/70 hover:text-brand-neon transition-colors"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <motion.a
          href={YT_URL}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05, boxShadow: `0 0 25px ${theme === 'dark' ? 'rgba(255, 0, 234, 0.4)' : 'rgba(255, 0, 234, 0.2)'}` }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-red px-4 md:px-6 py-2 text-[10px] font-black uppercase tracking-tighter shadow-[0_0_15px_rgba(255, 0, 234, 0.4)] flex items-center justify-center text-white"
        >
          {t('hero.subscribe')}
        </motion.a>
      </div>
    </div>
  </nav>
  );
};
