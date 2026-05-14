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
    <div className="min-h-screen bg-brand-dark flex flex-col font-sans overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 p-4 pb-32 grid grid-cols-1 md:grid-cols-4 auto-rows-min gap-6 mt-20 max-w-[1400px] mx-auto w-full">
        {/* Row 1 / Col 1-3 */}
        <div className="md:col-span-3">
          <Hero />
        </div>
        
        {/* Row 1-3 / Col 4 (Right Side Sidebar in Desktop) */}
        <div className="md:row-span-3">
          <StrikerPanel />
        </div>
        
        {/* Row 2 / Col 1-2 */}
        <div className="md:col-span-2">
          <VideoGallery />
        </div>
        
        {/* Row 2 / Col 3 */}
        <div className="md:col-span-1">
          <Loadouts />
        </div>
        
        {/* Row 3 / Col 1-2 */}
        <div className="md:col-span-2">
          <About />
        </div>
        
        {/* Row 3 / Col 3 */}
        <div className="md:col-span-1">
          <SocialHub />
        </div>
      </main>

      <Footer />
    </div>
  );
}
