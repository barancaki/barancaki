import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 text-center md:text-left">
            <h2 className="font-display text-4xl font-bold mb-4">Experience</h2>
            <p className="text-gray-400">My journey in engineering and automation.</p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
          {EXPERIENCE.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12 group">
              {/* Dot */}
              <div className={`absolute -left-[9px] md:-left-[11px] top-0 w-5 h-5 rounded-full border-4 border-void ${exp.current ? 'bg-neon shadow-[0_0_15px_rgba(232,98,42,0.5)]' : 'bg-gray-700'}`}></div>
              
              <div className="glass-card p-6 rounded-2xl transition-all hover:bg-white/5">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-neon transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-mono text-cyan/80 bg-cyan/10 px-2 py-1 rounded w-fit mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm">
                  <Briefcase size={14} />
                  <span className="uppercase tracking-wider font-semibold">{exp.company}</span>
                </div>
                
                <p className="text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;