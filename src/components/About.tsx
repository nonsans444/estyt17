import React from 'react';
import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

import { useAppContext } from '../context/AppContext';

export const About: React.FC = () => {
  const { t } = useAppContext();

  return (
    <div className="md:col-span-2 row-span-1 bg-brand-card bento-border p-8 flex flex-col justify-center relative overflow-hidden group transition-colors">
      <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
        <Shield className="w-48 h-48" />
      </div>
      <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-red mb-2 group-hover:text-brand-neon transition-colors">
        {t('about.mission')}
      </h2>
      <p className="text-xs text-gray-400 leading-relaxed uppercase italic font-black group-hover:text-brand-white transition-colors">
        {t('about.desc')}
      </p>
      
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="border-l-2 border-brand-red pl-3 group-hover:border-brand-neon transition-colors">
          <p className="text-xl font-display font-black text-brand-white italic leading-none">5M+</p>
          <p className="text-[8px] font-mono text-brand-red uppercase tracking-widest font-bold">{t('about.records')}</p>
        </div>
        <div className="border-l-2 border-brand-red pl-3 group-hover:border-brand-neon transition-colors">
          <p className="text-xl font-display font-black text-brand-white italic leading-none">450K</p>
          <p className="text-[8px] font-mono text-brand-red uppercase tracking-widest font-bold">{t('about.strikers')}</p>
        </div>
      </div>
    </div>
  );
};
