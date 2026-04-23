import React, { useEffect } from 'react';
import {
    Terminal,
    Cpu,
    Code2,
    Zap,
    Briefcase,
    GraduationCap,
    ArrowRight,
    BrainCircuit,
    LayoutTemplate
} from 'lucide-react';
import { EXPERIENCE } from '../constants';
import { Link } from 'react-router-dom';

const About: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-20 container mx-auto px-6 relative overflow-hidden">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto mb-24 animate-fade-in relative">


                <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-tight text-slate-900 dark:text-white">
                    Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-orange-400">Digital Workforce</span> of Tomorrow.
                </h1>

                <div className="text-xl text-slate-600 dark:text-gray-400 leading-relaxed space-y-6">
                    <p>
                        I'm <strong className="text-slate-900 dark:text-white">Baran Çakı</strong>, an Automation Architect and AI Engineer who believes that human potential shouldn't be wasted on repetitive tasks.
                    </p>
                    <p>
                        My philosophy is simple: <strong>"If it can be defined, it can be automated."</strong> I don't just write code; I build "Digital Workers"—intelligent, autonomous systems that handle complex workflows, from lead generation to data analysis, allowing businesses to scale without linear headcount growth.
                    </p>
                </div>
            </div>

            {/* Philosophy Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-white/5 hover:border-neon/50 transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Zap size={24} className="text-neon" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Speed is Currency</h3>
                    <p className="text-slate-600 dark:text-gray-400">
                        In the age of AI, speed isn't just a feature; it's survival. My workflows reduce 40-hour processes to 4-minute executions.
                    </p>
                </div>
                <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-white/5 hover:border-orange-400/50 transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <BrainCircuit size={24} className="text-orange-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Intelligent Design</h3>
                    <p className="text-slate-600 dark:text-gray-400">
                        Automation without intelligence is brittle. I integrate LLMs (Gemini, OpenAI) to create systems that can "think" and adapt to messy data.
                    </p>
                </div>
                <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-white/5 hover:border-orange-400/50 transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <LayoutTemplate size={24} className="text-orange-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Seamless UX</h3>
                    <p className="text-slate-600 dark:text-gray-400">
                        Powerful backend logic needs a beautiful frontend. My "Vibe Coding" approach ensures that even internal tools feel like premium products.
                    </p>
                </div>
            </div>

            {/* Experience Section */}
            <div className="max-w-4xl mx-auto mb-24">
                <h2 className="font-display text-3xl font-bold mb-12 text-slate-900 dark:text-white flex items-center gap-3">
                    <Briefcase className="text-neon" /> Professional Journey
                </h2>

                <div className="relative border-l border-slate-200 dark:border-white/10 ml-3 space-y-12">
                    {EXPERIENCE.map((exp, index) => (
                        <div key={exp.id} className="relative pl-8 md:pl-12 group">
                            {/* Dot */}
                            <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full border-2 transition-all duration-300
                                ${exp.current
                                    ? 'bg-void border-neon shadow-[0_0_10px_currentColor] scale-125 text-neon'
                                    : 'bg-slate-200 dark:bg-slate-700 border-slate-300 dark:border-slate-600 group-hover:border-white'}`}
                            />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-neon transition-colors">
                                    {exp.role}
                                </h3>
                                <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-xs font-mono text-slate-500 dark:text-gray-400 whitespace-nowrap mt-2 sm:mt-0">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="text-lg font-medium text-slate-700 dark:text-gray-300 mb-2">
                                {exp.company}
                            </div>

                            <p className="text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                                {exp.description}
                            </p>
                        </div>
                    ))}

                    {/* Education / Foundation (Static for now to add depth) */}
                    <div className="relative pl-8 md:pl-12 group opacity-70 hover:opacity-100 transition-opacity">
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 group-hover:border-white transition-all" />
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-orange-400 transition-colors">
                                Computer Engineering
                            </h3>
                            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-xs font-mono text-slate-500 dark:text-gray-400 whitespace-nowrap mt-2 sm:mt-0">
                                2020 - 2024
                            </span>
                        </div>
                        <div className="text-lg font-medium text-slate-700 dark:text-gray-300 mb-2">
                            Istanbul Health and Technology University
                        </div>
                        <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                            Specialized in Software Engineering, AI Algorithms, and Distributed Systems.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="glass-card rounded-3xl p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon to-orange-400"></div>

                <h2 className="font-display text-4xl font-bold mb-6 text-slate-900 dark:text-white">Ready to automate the boring stuff?</h2>
                <p className="text-xl text-slate-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                    Let's discuss how we can deploy digital workers to your team today.
                </p>

                <a href="mailto:contact@barancaki.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:scale-105 transition-transform">
                    Let's Talk <ArrowRight size={20} />
                </a>
            </div>

        </div>
    );
};

export default About;
