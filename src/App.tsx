/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero, Dossier, MissionLog, Footer, EducationArchive } from "./components/Sections";
import PhotoSlider from "./components/PhotoSlider";
import { USER_DATA } from "./constants";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-mcu-dark text-white selection:bg-mcu-red selection:text-white overflow-x-hidden">
      {/* Background Tech Mesh */}
      <div className="fixed inset-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <Navbar />

      <main>
        <Hero />
        
        <Dossier />
        
        <EducationArchive />

        <section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
          <div className="mb-16 space-y-[-5px]">
            <h4 className="text-mcu-red-bright font-black uppercase tracking-tighter text-lg ml-1">Album</h4>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">Animation <br/>Archive</h2>
          </div>
          <PhotoSlider images={USER_DATA.gallery} interval={5000} />
        </section>

        <MissionLog />

        <section className="py-48 px-6 bg-mcu-red-bright">
           <div className="max-w-4xl mx-auto text-center relative overflow-hidden group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[120px] md:text-[180px] font-black uppercase tracking-tighter mb-4 leading-[0.8] text-white">READY?</h2>
                <p className="text-xl text-white font-bold uppercase tracking-widest mb-12 max-w-lg mx-auto leading-relaxed">
                  The world needs heroes now more than ever. Initialize the assembly protocol.
                </p>
                <button className="px-16 py-6 bg-black text-white font-black uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-2xl hover:bg-white hover:text-black rounded-none">
                  Assemble Team
                </button>
              </motion.div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

