import React from 'react';
import { HERO_TITLES } from '../constants';
import { GooeyText } from './ui/gooey-text-morphing';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-orange-600 dark:text-neon tracking-widest uppercase">Vibe Coding</span>
          </div>

          <h1 className="font-display text-5xl md:text-8xl font-bold tracking-tight mb-6 leading-tight text-slate-900 dark:text-white">
            Baran Çakı
          </h1>

          <GooeyText
            texts={HERO_TITLES}
            morphTime={1}
            cooldownTime={0.25}
            className="h-20 md:h-24 mt-4 font-display font-bold"
            textClassName="text-3xl md:text-5xl dark:text-white text-slate-900"
          />

          <p className="mt-8 text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I don't just write code; I build <span className="text-slate-900 dark:text-white font-semibold">digital workers</span>.
            Bridging the gap between messy human workflows and elegant AI automation.
            Specializing in <span className="text-orange-600 dark:text-neon font-semibold">n8n</span>, <span className="text-orange-600 dark:text-neon font-semibold">Python</span>,
            and <span className="text-neon dark:text-neon font-semibold">LLM Integration</span>.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a href="#contact" className="px-8 py-3 rounded-full bg-neon text-white font-bold hover:bg-orange-700 transition-all shadow-[0_4px_20px_-5px_rgba(232,98,42,0.4)] dark:shadow-[0_0_20px_-5px_rgba(232,98,42,0.5)]">
              Let's Talk
            </a>
            <a href="#projects" className="px-8 py-3 rounded-full glass-card text-slate-900 dark:text-white font-medium hover:bg-slate-200/50 dark:hover:bg-white/5 transition-all">
              View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
