/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoSliderProps {
  images: string[];
  interval?: number;
}

export default function PhotoSlider({ images, interval = 5000 }: PhotoSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div id="photo-slider" className="relative w-full aspect-video md:aspect-21/9 overflow-hidden rounded-xl border border-white/10 stark-glow group">
      <AnimatePresence mode="wait">
        <div key={index} className="absolute inset-0 overflow-hidden">
          {/* Blurred background to fill empty space */}
          <motion.img
            src={images[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110"
            referrerPolicy="no-referrer"
          />
          {/* Main contained image */}
          <motion.img
            src={images[index]}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200&t=${index}`;
            }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative z-10 w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-mcu-dark/80 via-transparent to-transparent" />

      {/* Slider Progress & Navigation */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end z-20">
        <div>
          <div className="text-[10px] uppercase tracking-widest mb-2 opacity-60 font-bold">Animation Stream: {index + 1}/{images.length}</div>
          <div className="w-48 h-1 bg-white/10 relative overflow-hidden">
            <motion.div 
              key={index}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: interval / 1000, ease: "linear" }}
              className="absolute top-0 left-0 h-full bg-mcu-red-bright"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={prev}
            className="w-12 h-12 border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/10 text-white transition-all backdrop-blur-sm"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 bg-white text-black flex items-center justify-center cursor-pointer hover:scale-105 transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      <div className="absolute top-4 right-4 px-3 py-1 glass-panel text-[10px] font-mono tracking-widest text-mcu-gold uppercase">
        Animation Archive Stream: {index + 1}/{images.length}
      </div>
    </div>
  );
}
