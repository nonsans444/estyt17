import React from 'react';
import { Youtube, Instagram, Music2, ArrowUp } from 'lucide-react';

import { useAppContext } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { t } = useAppContext();

  return (
    <footer className="py-6 bg-brand-card border-t border-brand-white/5 flex flex-col md:flex-row items-center justify-between px-8 text-[9px] text-gray-500 font-mono gap-4 transition-colors">
      <div className="flex gap-4">
        <span className="font-bold text-brand-red">© 2026 EST_YT17</span>
        <span className="hidden sm:inline opacity-30">// {t('footer.creator')}</span>
      </div>
      <div className="hidden lg:flex gap-4 text-brand-neon opacity-50">
        <span>EST_YT17_OFFICIAL_HQ</span>
        <span>LOBBY_ID: 994231</span>
      </div>
      <div className="uppercase tracking-widest opacity-40">
        NOT AFFILIATED WITH NETEASE GAMES
      </div>
    </footer>
  );
};
