import React from 'react';
import { SOCIALS } from '../constants';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';

export const SocialHub: React.FC = () => {
  return (
    <div className="col-span-1 row-span-1 bg-brand-red text-brand-dark p-6 flex flex-col justify-center gap-4 group">
      <div className="text-center">
        <div className="text-3xl font-black leading-none uppercase italic">
          COMM<br />CENTER
        </div>
        <div className="text-[10px] font-bold tracking-[0.2em] mt-1 opacity-80 uppercase">
          Identity Verified
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
