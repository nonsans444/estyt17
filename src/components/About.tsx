import React from 'react';
import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="col-span-2 row-span-1 bg-[#0a0a0a] bento-border p-8 flex flex-col justify-center relative overflow-hidden group">
      <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
        <Shield className="w-48 h-48" />
      </div>
      <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-red mb-2">
        // THE CREATOR
      </h2>
      <p className="text-xs text-gray-400 leading-relaxed uppercase italic font-black">
        I am EST_YT17, a dedicated Blood Strike content creator focused on pushing the limits of mobile FPS. 
        Whether it's high-rank grinds or teaching the community how to master movement, 
        I'm here to elevate the game.
      </p>
      
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="border-l border-brand-red/30 pl-3">
          <p className="text-xl font-display font-black text-brand-red italic leading-none">5M+</p>
          <p className="text-[8px] font-mono text-gray-600 uppercase tracking-widest">Views</p>
        </div>
        <div className="border-l border-brand-red/30 pl-3">
          <p className="text-xl font-display font-black text-brand-red italic leading-none">450K</p>
          <p className="text-[8px] font-mono text-gray-600 uppercase tracking-widest">Army</p>
        </div>
      </div>
    </div>
  );
};
