import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'dark' | 'light';
type Language = 'en' | 'hr';

interface AppContextType {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.videos': 'Videos',
    'nav.loadouts': 'Loadouts',
    'nav.about': 'About',
    'hero.title': 'STRIKE WITH',
    'hero.subtitle': 'PRECISION',
    'hero.desc': 'Join EST_YT17 on the frontlines. Elite Blood Strike gameplay, tactical breakdowns, and the journey of a top-tier female competitor.',
    'hero.subscribe': 'Subscribe',
    'striker.pilot': 'PILOT_ACTIVE: EST_YT17',
    'striker.name': 'EMMA // STRIKER',
    'about.mission': '// THE MISSION',
    'about.desc': '"Redefining the meta. Master of the warzone. Join EST_YT17 on the path to extraction. The mission is simple: Dominate or be forgotten."',
    'about.records': 'RECORDS',
    'about.strikers': 'STRIKERS',
    'social.comm': 'COMM',
    'social.center': 'CENTER',
    'social.join': 'JOIN THE CORP',
    'footer.creator': '// BLOOD STRIKE CREATOR HUB',
  },
  hr: {
    'nav.home': 'Početna',
    'nav.videos': 'Video zapisi',
    'nav.loadouts': 'Oprema',
    'nav.about': 'O nama',
    'hero.title': 'UDARITE S',
    'hero.subtitle': 'PRECIZNOŠĆU',
    'hero.desc': 'Pridružite se EST_YT17 na prvoj liniji. Elitni Blood Strike gameplay, taktičke analize i putovanje vrhunske natjecateljice.',
    'hero.subscribe': 'Pretplati se',
    'striker.pilot': 'PILOT_AKTIVAN: EST_YT17',
    'striker.name': 'EMMA // STRIKER',
    'about.mission': '// MISIJA',
    'about.desc': '"Redefiniranje mete. Vladar ratne zone. Pridružite se EST_YT17 na putu do ekstrakcije. Misija je jednostavna: Dominiraj ili budi zaboravljen."',
    'about.records': 'REKORDI',
    'about.strikers': 'STRIKERI',
    'social.comm': 'KOMUNIKACIJSKI',
    'social.center': 'CENTAR',
    'social.join': 'PRIDRUŽI SE KORPUSU',
    'footer.creator': '// BLOOD STRIKE HUB ZA KREATORE',
  }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [language, setLanguage] = useState<Language>('en');

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  return (
    <AppContext.Provider value={{ theme, language, toggleTheme, setLanguage, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
