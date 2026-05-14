import React from 'react';
import { VIDEOS } from '../constants';
import { motion } from 'motion/react';
import { Play, Eye, Clock } from 'lucide-react';

import { useAppContext } from '../context/AppContext';

export const VideoGallery: React.FC = () => {
  const { t } = useAppContext();

  return (
    <div className="md:col-span-2 row-span-1 bg-brand-card p-4 flex flex-col bento-border group transition-colors">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-red">
          // {t('nav.videos')}
        </h2>
      </div>
      
      <div className="grid grid-cols-3 gap-2 flex-1">
        {VIDEOS.map((video) => (
          <div key={video.id} className="relative bg-black/20 border border-brand-red/20 overflow-hidden group/thumb cursor-pointer hover:border-brand-red/50 transition-colors aspect-video">
            <img 
              src={video.thumbnail} 
              alt="" 
              className="w-full h-full object-cover opacity-60 group-hover/thumb:opacity-90 transition-all group-hover/thumb:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />
            <div className="absolute bottom-2 left-2 text-[8px] font-black uppercase leading-tight pr-2 text-white">
              {video.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
