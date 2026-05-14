import React from 'react';
import { useAppContext } from '../context/AppContext';

export const StrikerPanel: React.FC = () => {
  const { t } = useAppContext();

  return (
    <div className="md:h-full min-h-[500px] md:min-h-[auto] bg-brand-card bento-border relative flex items-end justify-center group overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-brand-dark/20 z-10" />
      
      {/* Background HUD elements */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand-red/10 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-full bg-white/5 opacity-5 flex items-center justify-center border-x border-brand-red/10 pointer-events-none z-10">
        <span className="rotate-90 text-4xl font-black text-white/5 tracking-[1em] whitespace-nowrap">
          PILOT_SYNC
        </span>
      </div>

      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsB9R4utD_DpfVp-abWWNnR0ZvONkOrYDqg4Hkla7Q2g&s=10" 
        alt="Emma Striker" 
        className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-1000 z-0 opacity-80"
        style={{
          maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
        }}
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] z-10 pointer-events-none" />


      {/* Frame details */}
      <div className="absolute inset-0 border-[1px] border-white/10 pointer-events-none z-20" />
      <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-brand-red z-20" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-brand-red z-20" />

      <div className="relative z-30 text-center pb-12 p-6 w-full bg-gradient-to-t from-brand-dark via-brand-dark/95 to-transparent">
        <div className="text-[9px] uppercase tracking-[0.3em] text-brand-neon mb-2 font-bold animate-pulse">
          // {t('striker.pilot')}
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl md:text-5xl font-black italic text-white drop-shadow-[0_0_15px_rgba(255,0,234,0.6)] uppercase tracking-tighter leading-none">
            {t('striker.name').split(' // ')[0]}
          </span>
          <span className="text-[11px] font-black text-brand-red tracking-[0.5em] uppercase opacity-80">
            {t('striker.name').split(' // ')[1]}
          </span>
        </div>
      </div>
    </div>
  );
};
