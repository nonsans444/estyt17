import React from 'react';
import { SOCIALS } from '../constants';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';

import { useAppContext } from '../context/AppContext';

export const SocialHub: React.FC = () => {
  const { t } = useAppContext();

  return (
    <div className="col-span-1 row-span-1 bg-gradient-to-br from-brand-red to-brand-neon/50 text-white p-6 flex flex-col justify-center gap-4 group relative overflow-hidden shadow-[inset_0_0_50px_rgba(0,0,0,0.2)]">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--color-brand-white)_1px,transparent_1px)] bg-[size:10px_10px]" />
      <div className="relative z-10 text-center">
        <div className="text-3xl font-black leading-none uppercase italic">
          {t('social.comm')}<br />{t('social.center')}
        </div>
        <div className="text-[10px] font-bold tracking-[0.2em] mt-1 opacity-80 uppercase">
          {t('social.join')}
        </div>
      </div>
      
      <div className="flex justify-around items-center pt-2">
        {SOCIALS.map((social) => {
          // @ts-ignore
          const Icon = LucideIcons[social.icon] || LucideIcons.Share2;
          return (
            <motion.a 
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-2 border border-black/20 hover:bg-black/10 transition-colors"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};
