/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Brain, Shield, Zap, Users, Cpu, FileText, MapPin, ShieldCheck, Activity } from "lucide-react";
import { USER_DATA } from "../constants";

const ICON_MAP = {
  Brain, Shield, Zap, Users, Cpu
};

export function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 px-6 md:px-12 py-8 flex justify-between items-end border-b border-white/10 glass-panel border-x-0 border-t-0">
      <div className="absolute top-0 left-0 w-full h-1 bg-red-600 z-50" />
      <div>
        <p className="shield-text-sm text-mcu-red-bright mb-1 tracking-[0.3em]">MD. Amimul Ahasun Anas</p>
        <h2 className="text-[10px] tracking-[0.2em] text-slate-400 uppercase font-bold">Bio Data</h2>
      </div>
      <div className="hidden md:flex gap-8 text-[10px] uppercase font-mono tracking-widest text-white/60">
        <a href="#dossier" className="hover:text-mcu-gold transition-colors">Dossier</a>
        <a href="#powers" className="hover:text-mcu-gold transition-colors">Capabilities</a>
        <a href="#education" className="hover:text-mcu-gold transition-colors">Training</a>
        <a href="#missions" className="hover:text-mcu-gold transition-colors">Operational History</a>
      </div>
    </nav>
  );
}

export function Hero() {
  const [firstName, ...restName] = USER_DATA.name.split(" ");
  const lastName = restName.join(" ");

  return (
    <section className="relative pt-48 pb-20 px-6 md:pt-64 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-8"
        >
          <header>
            <h3 className="text-mcu-red-bright text-xl font-black italic uppercase tracking-tighter ml-1 mb-2">
              {USER_DATA.alias}
            </h3>
            <h1 className="bold-heading flex flex-col">
              <span>{firstName}</span>
              <span className="text-white/10 hover:text-white transition-colors duration-500">{lastName}</span>
            </h1>
          </header>

          <div className="space-y-6">
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-md border-l-4 border-mcu-red-bright pl-6 italic">
              {USER_DATA.brief}
            </p>

            <div className="grid grid-cols-2 gap-y-6 gap-x-8 pt-8">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-2">Operational Hub</span>
                <span className="text-sm font-black uppercase tracking-tight">{USER_DATA.shiledDossier.affiliations[0]}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-2">Primary Node</span>
                <span className="text-sm font-black uppercase tracking-tight">{USER_DATA.shiledDossier.location}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center py-12"
        >
          <div className="relative w-full max-w-md aspect-[4/5] bg-slate-900 rounded-sm border border-white/10 group overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-red-950/40 to-blue-950/40 opacity-60 z-10" />
            <div className="absolute top-4 left-4 z-20 glass-panel px-2 py-1 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-mcu-red-bright animate-pulse" />
              <span className="text-[8px] font-mono uppercase tracking-[0.2em] font-bold">Biometric Identification Active</span>
            </div>

            <img 
              src={USER_DATA.profilePicture} 
              alt={USER_DATA.name}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1573164060897-39031ba0d4f1?auto=format&fit=crop&q=80&w=800";
              }}
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
              referrerPolicy="no-referrer"
            />
            
            {/* HUD Overlay Elements */}
            <div className="absolute inset-0 pointer-events-none border-[20px] border-transparent group-hover:border-mcu-red-bright/5 transition-all duration-500" />
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-mcu-red-bright/40 m-4" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-mcu-red-bright/40 m-4" />
            
            {/* Scanning Overlay UI */}
            <div className="absolute top-4 right-4 z-20 border border-mcu-red-bright/50 p-3 text-[8px] font-mono text-mcu-red-bright bg-black/60 backdrop-blur-sm space-y-1">
              <div className="flex justify-between gap-4"><span>OPERATIVE:</span> <span>{USER_DATA.shiledDossier.personnelId}</span></div>
              <div className="flex justify-between gap-4"><span>PORT:</span> <span>8080</span></div>
              <div className="flex justify-between gap-4"><span>AUTH:</span> <span>SUCCESS</span></div>
              <div className="h-[1px] w-full bg-mcu-red-bright/50 mt-1"></div>
              <div className="flex justify-between gap-4"><span>THREAT:</span> <span>ZERO_DAY_READY</span></div>
            </div>

            <div className="absolute bottom-6 left-6 z-20">
               <div className="text-[10px] uppercase tracking-[0.4em] text-mcu-red-bright font-black mb-2 animate-pulse">Bio-Metric Authenticated</div>
               <div className="h-1 w-32 bg-white/10 relative overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-mcu-red-bright"
                  />
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Dossier() {
  const { shiledDossier, personalInfo } = USER_DATA;
  return (
    <section id="dossier" className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3">
             <div className="p-8 border border-white/10 rounded-sm bg-mcu-slate/20 relative overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-mcu-red-bright/40 font-bold uppercase tracking-widest">S.H.I.E.L.D. DATA_LINK</div>
                <div className="flex items-center gap-3 mb-10 pb-4 border-b border-mcu-red-bright/20">
                  <Shield size={20} className="text-mcu-red-bright" />
                  <h2 className="text-xs uppercase tracking-[0.3em] font-black text-slate-400">Personnel Dossier</h2>
                </div>
                
                <div className="space-y-8">
                  <div className="group">
                    <div className="text-[10px] uppercase font-mono tracking-[0.2em] text-mcu-red-bright/60 mb-2 font-bold">STATUS</div>
                    <div className="text-lg font-black uppercase tracking-tight leading-none text-green-500">{shiledDossier.status}</div>
                  </div>
                  <div className="group">
                    <div className="text-[10px] uppercase font-mono tracking-[0.2em] text-mcu-red-bright/60 mb-2 font-bold">D.O.B.</div>
                    <div className="text-lg font-black uppercase tracking-tight leading-none text-white">{personalInfo.dob}</div>
                  </div>
                  <div className="group">
                    <div className="text-[10px] uppercase font-mono tracking-[0.2em] text-mcu-red-bright/60 mb-2 font-bold">NATIONALITY</div>
                    <div className="text-lg font-black uppercase tracking-tight leading-none text-white">{personalInfo.nationality}</div>
                  </div>
                </div>
             </div>
          </div>

          <div id="powers" className="w-full md:w-2/3">
             <div className="mb-12">
                <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-none">
                   Tech-Stack <br/><span className="text-mcu-red-bright">Capabilities</span>
                </h3>
                <p className="text-slate-400 max-w-xl italic border-l-2 border-white/20 pl-6">Deep-packet inspection of core technical assets and digital weaponry.</p>
             </div>
             <div className="grid sm:grid-cols-2 gap-6">
                {USER_DATA.superpowers.map((power) => {
                  const Icon = ICON_MAP[power.icon as keyof typeof ICON_MAP] || Zap;
                  return (
                    <div key={power.name} className="p-6 border border-white/5 bg-white/2 rounded-sm group hover:border-mcu-red-bright/30 transition-all">
                      <div className="flex justify-between items-end mb-4">
                        <div className="p-3 bg-white/5 rounded-sm group-hover:bg-mcu-red-bright/10 group-hover:text-mcu-red-bright transition-colors">
                          <Icon size={24} />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Load: <span className="text-white">{power.level}%</span></span>
                      </div>
                      <h4 className="text-sm font-black uppercase tracking-widest mb-3 text-slate-200">{power.name}</h4>
                      <div className="h-1 bg-white/5 relative overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${power.level}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-mcu-red-bright"
                        />
                      </div>
                    </div>
                  );
                })}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EducationArchive() {
  return (
    <section id="education" className="py-20 px-6 border-t border-white/5 bg-mcu-slate/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
           <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 leading-none text-mcu-red-bright">Education Information</h2>
           <p className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">Historical data related to formal knowledge acquisition.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {USER_DATA.education.map((edu, idx) => (
             <div key={idx} className="p-8 border border-white/5 bg-black/40 rounded-sm relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-4 text-[8px] font-mono opacity-20 group-hover:opacity-100 transition-opacity">ED_{idx + 1}</div>
                <div className="text-[10px] text-mcu-red-bright font-mono mb-4">{edu.year}</div>
                <h4 className="text-xl font-black uppercase tracking-tighter mb-2 leading-tight">{edu.degree}</h4>
                <p className="text-sm text-slate-400 font-bold uppercase tracking-tight mb-4">{edu.institution}</p>
                <div className="inline-block px-3 py-1 bg-white/5 text-[10px] font-mono text-white/50 group-hover:text-mcu-red-bright">STATUS: {edu.score}</div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MissionLog() {
  return (
    <section id="missions" className="py-24 px-6 bg-mcu-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
           <div className="space-y-[-8px]">
              <h4 className="text-mcu-red-bright font-black uppercase italic tracking-tighter text-xl mb-4">Tactical Log</h4>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">Mission Archive</h2>
           </div>
           <p className="text-slate-500 max-w-sm text-sm uppercase tracking-widest font-bold leading-relaxed text-right">
             Decryption verified. Viewing historical intervention reports.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {USER_DATA.missions.map((mission) => (
            <motion.div
              key={mission.id}
              whileHover={{ y: -8 }}
              className="flex flex-col bg-slate-900/40 border border-white/5 rounded-sm overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={mission.image} 
                  alt={mission.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                   <div className="px-2 py-1 bg-mcu-red-bright text-white text-[8px] font-mono font-bold uppercase tracking-widest">
                     {mission.date}
                   </div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h4 className="text-sm font-black uppercase tracking-widest mb-4 group-hover:text-mcu-red-bright transition-colors">
                  {mission.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-bold uppercase tracking-tight">
                  {mission.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="h-24 border-t border-white/5 flex items-center px-6 md:px-12 justify-between bg-mcu-dark">
      <div className="flex gap-12">
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-[9px] uppercase tracking-widest text-slate-500">Ref No.</span>
          <span className="text-[10px] font-mono font-bold tracking-tighter">PARKER-616-S</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] uppercase tracking-widest text-slate-500">Origin</span>
          <span className="text-[10px] font-mono font-bold tracking-tighter">QUEENS_SECTOR_NYC</span>
        </div>
      </div>
      <div className="shield-text-sm text-mcu-red-bright flex items-center gap-4">
        <span className="hidden md:inline">Earth's Defenders</span>
        <span className="w-1 h-1 rounded-full bg-mcu-red-bright" />
        <span>Avengers Initiative</span>
      </div>
    </footer>
  );
}
