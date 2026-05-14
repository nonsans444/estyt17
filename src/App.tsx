/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoGallery } from './components/VideoGallery';
import { SocialHub } from './components/SocialHub';
import { Loadouts } from './components/Loadouts';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { StrikerPanel } from './components/StrikerPanel';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col font-sans overflow-x-hidden md:h-screen">
      <Navbar />
      
      <main className="flex-1 p-4 grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 mt-16 overflow-y-auto md:overflow-hidden">
        {/* Row 1 / Col 1-3 */}
        <Hero />
        
        {/* Row 1-3 / Col 4 (Right Side Sidebar in Desktop) */}
        <StrikerPanel />
        
        {/* Row 2 / Col 1-2 */}
        <VideoGallery />
        
        {/* Row 2 / Col 3 */}
        <Loadouts />
        
        {/* Row 3 / Col 1-2 */}
        <About />
        
        {/* Row 3 / Col 3 */}
        <SocialHub />
      </main>

      <Footer />
    </div>
  );
}
