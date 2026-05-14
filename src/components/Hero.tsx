import React from 'react';
import { motion } from 'motion/react';
import { Youtube, Music2 } from 'lucide-react';
import { GlitchText } from './GlitchText';

import { YT_URL, TT_URL } from '../constants';
import { useAppContext } from '../context/AppContext';

export const Hero: React.FC = () => {
  const { t } = useAppContext();

  return (
    <div className="col-span-3 row-span-1 bg-brand-card border-l-4 border-brand-red p-8 flex flex-col justify-center relative overflow-hidden group min-h-[300px] shadow-[0_0_50px_rgba(255,0,234,0.05)]">
      <div className="absolute top-0 right-0 p-4 text-[10px] text-brand-red opacity-30 font-mono tracking-widest">
        SIGNAL_STRENGTH: 100% // ENCRYPTED_LINK
      </div>
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-black italic uppercase leading-none tracking-tighter mb-4">
          <GlitchText text={t('hero.title')} /><br />
          <span className="text-brand-red drop-shadow-[0_0_15px_rgba(255,0,234,0.5)]">{t('hero.subtitle')}</span>
        </h1>
        <p className="text-gray-300 text-xs md:text-sm max-w-xl font-medium uppercase tracking-tight leading-relaxed">
          {t('hero.desc')}
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <motion.a
            href={YT_URL}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            className="bg-brand-red text-white px-6 md:px-8 py-2 font-black uppercase text-[10px] md:text-xs btn-glow flex items-center justify-center"
          >
            {t('hero.subscribe')}
          </motion.a>
          <motion.a
            href={TT_URL}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 md:px-8 py-2 font-black uppercase text-[10px] md:text-xs flex items-center justify-center"
          >
            TIKTOK
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};
