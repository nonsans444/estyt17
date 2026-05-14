import React from 'react';
import { VIDEOS } from '../constants';
import { motion } from 'motion/react';
import { Play, Eye, Clock } from 'lucide-react';

export const VideoGallery: React.FC = () => {
  return (
    <div className="col-span-2 row-span-1 bg-brand-card p-4 flex flex-col bento-border group">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-red">
          // RECENT DEPLOYMENTS
        </h2>
        <span className="text-[10px] text-gray-500 underline uppercase cursor-pointer">
          View All Missions
        </span>
      </div>
      
      <div className="grid grid-cols-3 gap-2 flex-1">
        {VIDEOS.map((video) => (
          <div key={video.id} className="relative bg-[#333] border border-brand-red/20 overflow-hidden group/thumb cursor-pointer">
            <img 
              src={video.thumbnail} 
              alt="" 
              className="w-full h-full object-cover opacity-60 group-hover/thumb:opacity-100 transition-opacity"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
            <div className="absolute bottom-2 left-2 text-[8px] font-black uppercase leading-tight pr-2">
              {video.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
