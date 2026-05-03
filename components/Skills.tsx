import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="glass-card rounded-3xl p-8 md:col-span-12 lg:col-span-12 xl:col-span-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon to-cyan"></div>
      <h3 className="font-display text-2xl font-bold mb-6">Core Technologies</h3>
      <div className="flex flex-wrap gap-4">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/5 hover:border-neon hover:bg-white/10 hover:shadow-[0_0_15px_-3px_rgba(232,98,42,0.5)] hover:scale-105 transition-all duration-300 cursor-default group">
            <span className="text-neon group-hover:text-cyan transition-colors">{skill.icon}</span>
            <span className="text-base font-medium text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
