import React, { useState } from 'react';
import {
    UserPlus,
    Search,
    Linkedin,
    Mail,
    Database,
    ArrowRight,
    CheckCircle2,
    Cpu
} from 'lucide-react';

interface WorkflowNode {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
}

const WORKFLOW_NODES: WorkflowNode[] = [
    {
        id: 'input',
        title: 'Lead Criteria',
        description: 'User defines target audience: Job Title, Industry, and Location via input form.',
        icon: <UserPlus size={24} />,
        color: 'text-blue-400'
    },
    {
        id: 'search',
        title: 'Smart Search',
        description: 'Agent constructs complex Boolean strings to find profiles on Google via Apify.',
        icon: <Search size={24} />,
        color: 'text-neon'
    },
    {
        id: 'scrape',
        title: 'Profile Extraction',
        description: 'Deep scrapes LinkedIn profiles to get full work history and activity.',
        icon: <Linkedin size={24} />,
        color: 'text-blue-600'
    },
    {
        id: 'enrich',
        title: 'Enrichment',
        description: 'Locates corporate emails, validates domains, and formats phone numbers.',
        icon: <Mail size={24} />,
        color: 'text-yellow-400'
    },
    {
        id: 'sync',
        title: 'Sync',
        description: 'Pushes verified leads to Google Sheets or CRM in real-time.',
        icon: <Database size={24} />,
        color: 'text-green-400'
    }
];

const WorkflowVisualizer: React.FC = () => {
    const [activeNode, setActiveNode] = useState<string | null>(null);

    const activeNodeData = WORKFLOW_NODES.find(n => n.id === activeNode) || WORKFLOW_NODES[0];

    return (
        <div className="md:col-span-12 glass-card rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-neon to-green-400"></div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-violet-100 dark:bg-neon/10">
                            <Cpu className="text-violet-600 dark:text-neon" size={24} />
                        </div>
                        <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">LinkedIn Lead Gen Engine</h3>
                    </div>
                    <p className="text-slate-600 dark:text-gray-400 max-w-2xl">
                        An autonomous n8n workflow that finds, scrapes, and enriches thousands of leads on autopilot.
                    </p>
                </div>

                <a
                    href="/linkedin-lead-gen"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-neon hover:border-neon hover:text-white transition-all text-sm font-medium text-slate-700 dark:text-white group/btn"
                >
                    Learn How It Works
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
            </div>

            {/* Workflow Graphic Area */}
            <div className="relative py-16 px-4 bg-slate-50 dark:bg-void/30 rounded-2xl border border-slate-200 dark:border-white/5 overflow-x-auto min-h-[300px] flex items-center justify-center bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:16px_16px]">
                {/* Connection Line */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-200 via-violet-300 to-green-200 dark:from-blue-900 dark:via-neon/50 dark:to-green-900 -translate-y-1/2 hidden md:block z-0"></div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10 min-w-[800px] md:min-w-0 w-full px-8">
                    {WORKFLOW_NODES.map((node, index) => (
                        <React.Fragment key={node.id}>
                            {/* Node */}
                            <button
                                onClick={() => setActiveNode(node.id)}
                                className={`flex flex-col items-center gap-4 group/node transition-all duration-300 relative ${activeNode === node.id || (!activeNode && index === 0) ? 'scale-110 -translate-y-2' : 'hover:scale-105 opacity-60 hover:opacity-100 hover:-translate-y-1'}`}
                            >
                                <div
                                    className={`w-20 h-20 rounded-2xl bg-white dark:bg-void border-2 flex items-center justify-center shadow-xl transition-all duration-500 z-10 relative
                                    ${activeNode === node.id || (!activeNode && index === 0)
                                            ? `border-${node.color.split('-')[1]}-500 shadow-[0_0_30px_-5px_rgba(124,58,237,0.3)] dark:shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)]`
                                            : 'border-slate-200 dark:border-white/10 group-hover/node:border-violet-300 dark:group-hover/node:border-white/30'
                                        }`}
                                >
                                    <span className={`${node.color} transition-colors duration-300 transform scale-125`}>
                                        {node.icon}
                                    </span>
                                </div>
                                <span className={`text-base font-medium absolute -bottom-10 whitespace-nowrap ${activeNode === node.id || (!activeNode && index === 0) ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-gray-500'}`}>
                                    {node.title}
                                </span>

                                {/* Active Indicator Dot */}
                                {(activeNode === node.id || (!activeNode && index === 0)) && (
                                    <span className="absolute -top-3 right-0 flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-neon"></span>
                                    </span>
                                )}
                            </button>

                            {/* Arrow for Desktop */}
                            {index < WORKFLOW_NODES.length - 1 && (
                                <div className="hidden md:flex items-center justify-center px-4 opacity-30 z-0">
                                    <ArrowRight size={24} className="text-slate-400 dark:text-gray-500" />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Description Area */}
            <div className="mt-8 p-6 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 transition-all duration-500 shadow-sm dark:shadow-none">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-white dark:bg-white/5 border border-slate-100 dark:border-transparent">
                        <div className={`${activeNodeData.color}`}>
                            {activeNodeData.icon}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                            {activeNodeData.title}
                            <span className="px-2 py-0.5 rounded text-[10px] bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-gray-400 border border-slate-300 dark:border-white/5">STEP {WORKFLOW_NODES.findIndex(n => n.id === activeNodeData.id) + 1}</span>
                        </h4>
                        <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                            {activeNodeData.description}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WorkflowVisualizer;
