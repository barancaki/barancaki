import React, { useState, useEffect } from 'react';
import {
    FileSpreadsheet,
    Database,
    BrainCircuit,
    Globe,
    ArrowRight,
    Split,
    Merge,
    FileType,
    CheckCircle
} from 'lucide-react';

const DataInstructionVisualizer: React.FC = () => {
    const [processState, setProcessState] = useState<'idle' | 'processing' | 'complete'>('idle');
    const [logs, setLogs] = useState<string[]>([]);

    const startProcessing = () => {
        if (processState !== 'idle') return;
        setProcessState('processing');
        setLogs([]);

        const steps = [
            { msg: 'Reading Source Data...', delay: 500 },
            { msg: 'Initializing Selenium WebDriver...', delay: 1200 },
            { msg: 'Scraping target websites (Async)...', delay: 2000 },
            { msg: 'Calculating TF-IDF vectors...', delay: 3000 },
            { msg: 'Gemini: "Electronics" category detected.', delay: 4000 },
            { msg: 'Fuzzy Matching: 82% similarity found.', delay: 5000 },
            { msg: 'Exporting to SQL Database...', delay: 6000 },
            { msg: 'Done.', delay: 6500 },
        ];

        steps.forEach(({ msg, delay }) => {
            setTimeout(() => {
                setLogs(prev => [...prev, msg]);
                if (msg === 'Done.') setProcessState('complete');
            }, delay);
        });
    };

    return (
        <div className="md:col-span-12 glass-card rounded-3xl p-8 relative overflow-hidden group min-h-[450px] flex flex-col">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>

            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4 relative z-10">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-500/10">
                            <Database className="text-cyan-600 dark:text-cyan-400" size={24} />
                        </div>
                        <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">Data Instruction Tool</h3>
                    </div>
                    <p className="text-slate-600 dark:text-gray-400 text-sm max-w-xl">
                        A unified engine for ETL, Fuzzy Matching, and AI-driven classification using Machine Learning.
                    </p>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="flex gap-2 hidden md:flex">
                        <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-500 font-mono">TF-IDF</span>
                        <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-500 font-mono">Gemini</span>
                    </div>
                    <a
                        href="/data-instruction-tool"
                        className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-cyan-500 hover:border-cyan-500 hover:text-white transition-all text-sm font-medium text-slate-700 dark:text-white group/btn"
                    >
                        Learn How It Works
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>

            {/* Main Interaction Area */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">

                {/* Input Column */}
                <div className="flex flex-col gap-4">
                    <div className="glass-card p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/5">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-slate-500 uppercase">Input Sources</span>
                            <FileType size={16} className="text-slate-400" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-gray-300 p-2 rounded bg-white dark:bg-black/20 border border-slate-100 dark:border-white/5">
                                <FileSpreadsheet size={14} className="text-green-500" />
                                <span>Master_Product_List.xlsx</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-gray-300 p-2 rounded bg-white dark:bg-black/20 border border-slate-100 dark:border-white/5">
                                <Globe size={14} className="text-blue-500" />
                                <span>competitor-site.com</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={startProcessing}
                        disabled={processState !== 'idle'}
                        className={`mt-auto py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2
                            ${processState === 'idle'
                                ? 'bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/20'
                                : 'bg-slate-200 dark:bg-white/10 text-slate-400 cursor-not-allowed'
                            }`}
                    >
                        {processState === 'idle' ? 'Run Pipeline' : 'Processing...'}
                        <ArrowRight size={16} />
                    </button>
                </div>

                {/* Processing Core (Animation Area) */}
                <div className="lg:col-span-2 glass-card rounded-xl border border-slate-200 dark:border-white/5 bg-slate-900 overflow-hidden relative flex flex-col">
                    {/* Code/Terminal Header */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 border-b border-white/5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="ml-2 text-xs text-slate-400 font-mono">machine_learning_core.py</span>
                    </div>

                    {/* Terminal Output */}
                    <div className="flex-1 p-4 font-mono text-xs text-green-400 space-y-2 overflow-y-auto custom-scrollbar h-[200px]">
                        <div className="opacity-50"># Waiting for job instruction...</div>
                        {logs.map((log, i) => (
                            <div key={i} className="animate-fade-in flex items-start gap-2">
                                <span className="text-slate-500">[{new Date().toLocaleTimeString()}]</span>
                                <span>{log}</span>
                            </div>
                        ))}
                        {processState === 'processing' && (
                            <div className="animate-pulse">_</div>
                        )}
                    </div>

                    {/* Visual Nodes Overlay (Abstract) */}
                    <div className="absolute right-4 bottom-4 flex gap-4 pointer-events-none opacity-20">
                        <BrainCircuit size={64} className="text-purple-500 animate-pulse" />
                    </div>
                </div>
            </div>

            {/* Feature Tags Footer */}
            <div className="mt-6 flex flex-wrap gap-2">
                {['Selenium', 'Parallel Processing', 'Fuzzy Logic', 'TF-IDF', 'AsyncIO'].map(tag => (
                    <span key={tag} className="px-2 py-1 rounded text-[10px] font-medium bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/10">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default DataInstructionVisualizer;
