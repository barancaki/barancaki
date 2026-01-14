import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 pb-32">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="glass-card rounded-3xl p-8 md:p-12 text-center border-t border-neon/30 relative overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-neon to-transparent"></div>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Let's build something.</h2>
          <p className="text-gray-400 mb-10 text-lg">
            Ready to automate your workflows or build the next AI-powered product?
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/barancaki"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all hover:scale-110 group"
              aria-label="GitHub"
            >
              <Github className="text-gray-300 group-hover:text-white" size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/baran-%C3%A7ak%C4%B1-9919b224b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all hover:scale-110 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-gray-300 group-hover:text-cyan" size={24} />
            </a>
            <a
              href="mailto:baran.caki@hotmail.com"
              className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all hover:scale-110 group"
              aria-label="Email"
            >
              <Mail className="text-gray-300 group-hover:text-neon" size={24} />
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5">
            <p className="text-sm text-slate-500 dark:text-gray-600">
              © {new Date().getFullYear()} Baran Çakı. Crafted with Vibe Coding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;