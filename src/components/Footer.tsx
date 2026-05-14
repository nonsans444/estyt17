import React from 'react';
import { Youtube, Instagram, Music2, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="h-10 bg-brand-card border-t border-white/10 flex items-center justify-between px-6 text-[8px] md:text-[10px] text-gray-500 font-mono">
      <div className="flex gap-4">
        <span className="font-bold">© 2026 EST_YT17</span>
        <span className="hidden sm:inline opacity-30">// BLOOD STRIKE FAN CONTENT</span>
      </div>
      <div className="hidden lg:flex gap-4">
        <span>EST_YT17_OFFICIAL_HQ</span>
        <span className="text-brand-red">LOBBY_ID: 994231</span>
      </div>
      <div className="uppercase tracking-widest">
        NOT AFFILIATED WITH NETEASE GAMES
      </div>
    </footer>
  );
};
