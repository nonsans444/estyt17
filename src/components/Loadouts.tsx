import React from 'react';
import { LOADOUTS } from '../constants';
import { motion } from 'motion/react';
import { Target, CheckCircle2 } from 'lucide-react';

export const Loadouts: React.FC = () => {
  const loadout = LOADOUTS[0];
  
  return (
    <div className="col-span-1 row-span-1 bg-brand-card p-4 bento-border flex flex-col justify-between group">
      <h2 className="text-[10px] font-black uppercase tracking-widest text-brand-red mb-3">
        // EST'S SIGNATURE LOADOUT
      </h2>
      
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-end">
          <span className="text-[10px] text-gray-500 uppercase font-bold">Weapon</span>
          <span className="text-sm font-black italic uppercase">{loadout.weapon} {loadout.weapon === 'AK-47' ? 'SHUTTER' : ''}</span>
        </div>
        <div className="w-full h-1 bg-[#333]">
          <div className="h-full bg-brand-red w-[88%] shadow-[0_0_10px_rgba(255,70,85,0.5)]"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-y-2 mt-4 text-[9px] font-bold uppercase">
        {Object.entries(loadout.details).slice(0, 4).map(([key, value]) => (
          <div key={key}>
            <span className="block text-gray-500">{key}</span>
            <span className="font-black text-brand-white/90">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
