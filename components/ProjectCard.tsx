import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={`group glass-card rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${project.colSpan || 'col-span-1'}`}>
      
      {/* Background Gradient/Image Placeholder */}
      <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${project.imageGradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-cyan/10 transition-colors"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-bold tracking-wider uppercase text-cyan/80 bg-cyan/10 px-3 py-1 rounded-full border border-cyan/20">
            {project.category}
          </span>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors">
              <ArrowUpRight size={20} />
            </a>
          )}
        </div>
        
        <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 leading-tight group-hover:text-orange-200 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
        {project.tech.map((t, i) => (
          <span key={i} className="text-xs font-medium text-gray-500 bg-black/40 px-2 py-1 rounded border border-white/5">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;