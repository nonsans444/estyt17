import React from 'react';

export const StrikerPanel: React.FC = () => {
  return (
    <div className="col-span-1 row-span-3 bg-gradient-to-t from-brand-red/20 to-transparent bento-border relative flex items-end justify-center group overflow-hidden">
      <div className="absolute inset-0 bg-brand-dark/40" />
      
      {/* Background Text / HUD */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-full bg-[#333] opacity-20 flex items-center justify-center border-x border-brand-red/40 pointer-events-none">
        <span className="rotate-90 text-4xl font-black text-white/5 tracking-[1em] whitespace-nowrap">
          STRIKER_UNIT_01
        </span>
      </div>

      <img 
        src="https://picsum.photos/seed/kagura-striker/600/900" 
        alt="Kagura Striker" 
        className="relative z-10 w-full h-[80%] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
        style={{
          maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
        }}
        referrerPolicy="no-referrer"
      />

      <div className="absolute inset-0 border-[10px] border-brand-dark pointer-events-none z-20" />

      <div className="z-30 text-center pb-8 p-4 w-full bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent">
        <div className="text-[10px] uppercase tracking-widest text-brand-red mb-1 font-bold">
          Status: Active
        </div>
        <div className="text-2xl font-black italic tracking-tighter">
          KAGURA // R7
        </div>
      </div>
    </div>
  );
};
