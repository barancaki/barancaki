import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import Skills from './Skills';
import WorkflowVisualizer from './WorkflowVisualizer';
import MapsWorkflowVisualizer from './MapsWorkflowVisualizer';
import RayaAiVisualizer from './RayaAiVisualizer';
import DataInstructionVisualizer from './DataInstructionVisualizer';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const BentoGrid: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  // Initial project list for our "Major" projects
  const MAJOR_PROJECTS = [
    {
      id: 'linkedin',
      title: 'LinkedIn Lead Gen Engine',
      description: 'n8n workflow for lead search, profile scraping, enrichment, and CRM or Google Sheets sync.',
      color: 'bg-neon',
      component: <WorkflowVisualizer />
    },
    {
      id: 'maps',
      title: 'Google Maps Scraper',
      description: 'Geospatial workflow for local business discovery, enrichment, and CSV or Excel export.',
      color: 'bg-orange-500',
      component: <MapsWorkflowVisualizer />
    },
    {
      id: 'raya',
      title: 'Raya AI (Beta)',
      description: 'Mobile app concept for skin analysis, product comparison, and routine tracking with Gemini and OpenAI.',
      color: 'bg-pink-500',
      component: <RayaAiVisualizer />
    },
    {
      id: 'data-tool',
      title: 'Data Instruction Tool',
      description: 'Python framework for Excel comparison, web scraping, fuzzy matching, TF-IDF, and Gemini classification.',
      color: 'bg-cyan-500',
      component: <DataInstructionVisualizer />
    }
  ];

  const toggleProject = (id: string) => {
    if (activeProject === id) {
      setActiveProject(null);
    } else {
      setActiveProject(id);
    }
  };

  return (
    <section id="projects" className="py-20 relative" aria-labelledby="projects-title">
      <div className="container mx-auto px-6 relative">
        <div className="mb-12">
          <h2 id="projects-title" className="font-display text-4xl font-bold mb-4 text-slate-900 dark:text-white">Selected Work</h2>
          <p className="text-slate-600 dark:text-gray-400">AI automation, data engineering, web scraping, and mobile product projects.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Project Stack */}
          <div className="flex-1 space-y-8">
            {MAJOR_PROJECTS.map((project, index) => (
              <div
                key={project.id}
                id={`project-${project.id}`}
                className="flex gap-4 lg:gap-6 items-start transition-all duration-500"
              >
                {/* Dot Indicator */}
                <div className="flex flex-col items-center pt-6 shrink-0">
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="group relative flex items-center justify-center"
                    title={project.title}
                    aria-label={`Toggle ${project.title} details`}
                    aria-expanded={activeProject === project.id}
                    aria-controls={`details-${project.id}`}
                  >
                    <div className={`w-3 h-3 rounded-full transition-all duration-500
                      ${activeProject === project.id && project.id === 'linkedin' ? 'bg-neon shadow-[0_0_10px_2px] shadow-neon/50 scale-125' : ''}
                      ${activeProject === project.id && project.id === 'maps' ? 'bg-orange-500 shadow-[0_0_10px_2px] shadow-orange-500/50 scale-125' : ''}
                      ${activeProject === project.id && project.id === 'raya' ? 'bg-pink-500 shadow-[0_0_10px_2px] shadow-pink-500/50 scale-125' : ''}
                      ${activeProject === project.id && project.id === 'data-tool' ? 'bg-cyan-500 shadow-[0_0_10px_2px] shadow-cyan-500/50 scale-125' : ''}
                      ${activeProject !== project.id ? 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-500' : ''}
                    `} />
                  </button>
                  {index < MAJOR_PROJECTS.length - 1 && (
                    <div className={`w-0.5 mt-2 transition-all duration-500 ${activeProject === project.id ? 'flex-1 min-h-[2rem]' : 'h-8'} ${
                      activeProject === project.id && project.id === 'linkedin' ? 'bg-neon/30' :
                      activeProject === project.id && project.id === 'maps' ? 'bg-orange-500/30' :
                      activeProject === project.id && project.id === 'raya' ? 'bg-pink-500/30' :
                      activeProject === project.id && project.id === 'data-tool' ? 'bg-cyan-500/30' :
                      'bg-slate-200 dark:bg-white/10'
                    }`} />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1">
                {/* Header / Trigger Card */}
                <button
                  onClick={() => toggleProject(project.id)}
                  aria-expanded={activeProject === project.id}
                  aria-controls={`details-${project.id}`}
                  className={`w-full text-left p-5 md:p-8 rounded-3xl border transition-all duration-300 group relative overflow-hidden
                                        ${activeProject === project.id
                      ? 'bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 mb-6 shadow-lg'
                      : 'glass-card hover:bg-slate-50 dark:hover:bg-white/5 border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20'
                    }`}
                >
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <h3 className={`font-display text-xl md:text-2xl font-bold mb-2 transition-colors ${activeProject === project.id ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                        {project.title}
                      </h3>
                      <p className="text-slate-500 dark:text-gray-400 text-sm md:text-base">
                        {project.description}
                      </p>
                    </div>
                    <div className={`p-3 rounded-full transition-all duration-300 ${activeProject === project.id ? 'bg-slate-200 dark:bg-white/10 rotate-180' : 'bg-slate-100 dark:bg-white/5 group-hover:bg-slate-200 dark:group-hover:bg-white/10'}`}>
                      <ChevronDown className={`transition-colors ${activeProject === project.id ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-gray-400'}`} />
                    </div>
                  </div>

                  {/* Progress Bar Line for aesthetics */}
                  {activeProject === project.id && (
                    <div className={`absolute bottom-0 left-0 h-1 transition-all duration-1000 w-full ${project.color}`} />
                  )}
                </button>

                {/* Expanded Content Area */}
                <div id={`details-${project.id}`} className={`grid transition-all duration-500 ease-in-out overflow-hidden ${activeProject === project.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="min-h-0">
                    {/* Wrapper to handle Grid layouts within the flex container */}
                    {project.id === 'raya' ? (
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="lg:col-span-8">
                          {project.component}
                        </div>
                        {/* Raya Beta Message - Empty Space Filler */}
                        <div className="lg:col-span-4 flex flex-col justify-center h-full min-h-[200px] glass-card p-8 rounded-3xl border-dashed border-2 border-pink-300/30 dark:border-pink-500/20 bg-pink-50/50 dark:bg-pink-500/5">
                          <div className="mb-4 p-3 w-fit rounded-full bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400">
                            <MessageCircle size={24} />
                          </div>
                          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Private Beta Access</h4>
                          <p className="text-slate-600 dark:text-gray-400 mb-6 leading-relaxed">
                            Raya AI is currently in closed beta testing. We are refining the computer vision models before public release.
                          </p>
                          <p className="text-sm font-medium text-slate-500 dark:text-gray-500 mb-4">Interested in early access?</p>
                          <a href="#contact" className="inline-flex justify-center items-center py-3 px-6 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:opacity-90 transition-opacity">
                            Ask About Beta Access
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full">
                        {project.component}
                      </div>
                    )}
                  </div>
                </div>
                </div>
              </div>
            ))}

            <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
