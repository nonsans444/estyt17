import React from 'react';
import { useAppContext } from '../context/AppContext';

export const StrikerPanel: React.FC = () => {
  const { t } = useAppContext();

  return (
    <div className="md:h-full min-h-[500px] md:min-h-[auto] bg-gradient-to-t from-brand-red/10 to-transparent bento-border relative flex items-end justify-center group overflow-hidden">
      <div className="absolute inset-0 bg-brand-dark/20" />
      
      {/* Background Text / HUD */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-full bg-white/5 opacity-10 flex items-center justify-center border-x border-brand-red/20 pointer-events-none">
        <span className="rotate-90 text-4xl font-black text-white/5 tracking-[1em] whitespace-nowrap">
          SYSTEM_RELOAD
        </span>
      </div>

      <img 
        src="https://images.unsplash.com/photo-1542751110-97646afafbca?q=80&w=2670&auto=format&fit=crop" 
        alt="Tactical Striker" 
        className="relative z-10 w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-1000"
        style={{
          maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
        }}
        referrerPolicy="no-referrer"
      />

      <div className="absolute inset-0 border-[8px] border-brand-dark/20 pointer-events-none z-20" />

      <div className="z-30 text-center pb-10 p-6 w-full bg-gradient-to-t from-brand-dark via-brand-dark/95 to-transparent">
        <div className="text-[10px] uppercase tracking-widest text-brand-neon mb-2 font-bold animate-pulse">
          // {t('striker.pilot')}
        </div>
        <div className="text-xl md:text-2xl font-black italic text-white drop-shadow-[0_2px_12px_rgba(255,0,234,0.8)] uppercase leading-none px-2">
          {t('striker.name')}
        </div>
      </div>
    </div>
  );
};
