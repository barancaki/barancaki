import React, { useState, useEffect } from 'react';
import { HERO_TITLES } from '../constants';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delta]);

  const tick = () => {
    let fullText = HERO_TITLES[titleIndex];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(50);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(2000); // Pause at end
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setTitleIndex(prev => (prev + 1) % HERO_TITLES.length);
      setDelta(150);
    } else if (!isDeleting && updatedText !== fullText) {
      setDelta(100);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blobs - Tuned for Light/Dark */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/40 dark:bg-neon/20 rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-normal"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/40 dark:bg-cyan/10 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-normal"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-cyan-600 dark:text-cyan tracking-widest uppercase">Vibe Coding</span>
          </div>

          <h1 className="font-display text-5xl md:text-8xl font-bold tracking-tight mb-6 leading-tight text-slate-900 dark:text-white">
            Baran Çakı
          </h1>

          <div className="h-20 md:h-24 flex items-center justify-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-600 dark:from-neon dark:to-cyan">
              {text}<span className="text-slate-900 dark:text-white animate-pulse">|</span>
            </h2>
          </div>

          <p className="mt-8 text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I don't just write code; I build <span className="text-slate-900 dark:text-white font-semibold">digital workers</span>.
            Bridging the gap between messy human workflows and elegant AI automation.
            Specializing in <span className="text-cyan-600 dark:text-cyan font-semibold">n8n</span>, <span className="text-cyan-600 dark:text-cyan font-semibold">Python</span>,
            and <span className="text-neon dark:text-neon font-semibold">LLM Integration</span>.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a href="#contact" className="px-8 py-3 rounded-full bg-neon text-white font-bold hover:bg-violet-600 transition-all shadow-[0_4px_20px_-5px_rgba(124,58,237,0.4)] dark:shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)]">
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