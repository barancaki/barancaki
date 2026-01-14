import React, { useEffect } from 'react';
import {
    Database,
    FileSpreadsheet,
    BrainCircuit,
    Globe,
    ArrowLeft,
    Cpu,
    Split,
    Merge,
    Layers,
    Bot
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DataInstructionTool: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-20 container mx-auto px-6">
            {/* Back Button */}
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white mb-12 transition-colors">
                <ArrowLeft size={20} />
                Back to Portfolio
            </Link>

            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-6">
                    <Database size={14} />
                    <span>Data Engineering & ML</span>
                </div>
                <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-900 dark:text-white">
                    The Ultimate <span className="text-cyan-600 dark:text-cyan-400">Data Instruction</span> Engine.
                </h1>
                <p className="text-xl text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    A heavy-duty Python framework for extracting, comparing, and classifying massive datasets using parallel processing and generative AI.
                </p>
            </div>

            {/* Core Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <FileSpreadsheet size={120} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                        <Merge className="text-cyan-500" /> Smart Comparison
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400 mb-6 leading-relaxed">
                        Algorithmically compares multiple Excel files to identify discrepancies. Features a <strong>Fuzzy Logic</strong> engine that detects "80% matches" (e.g., "Apple Inc." vs "Apple Incorporated"), reducing manual review by 90%.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-500 dark:text-gray-400">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>Row-by-row & Column-mapping analysis</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>Levenshtein distance matching</li>
                    </ul>
                </div>

                <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <BrainCircuit size={120} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                        <Bot className="text-purple-500" /> AI Classification
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400 mb-6 leading-relaxed">
                        Automatically categorizes websites into product groups. The tool utilizes the <strong>TF-IDF algorithm</strong> to extract statistical keywords, then feeds them into <strong>Gemini</strong> for high-level semantic classification.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-500 dark:text-gray-400">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>Keyword density analysis</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>LLM-based sector determination</li>
                    </ul>
                </div>
            </div>

            {/* Technical Detail Section */}
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
                {/* Decorative background grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-display font-bold text-white mb-6">Built for Speed & Scale</h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Web scraping and data processing can be painfully slow. This tool leverages <strong>Python's AsyncIO</strong> and <strong>Multiprocessing</strong> to run tasks in parallel, turning hour-long jobs into minute-long sprints.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                    <Layers className="text-green-400" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Parallel Execution</h4>
                                    <p className="text-sm text-gray-400">Selenium instances run concurrently across available CPU cores.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                    <Globe className="text-blue-400" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Dynamic Rendering</h4>
                                    <p className="text-sm text-gray-400">Handles complex JS-heavy sites that standard `requests` libraries can't touch.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Code Snippet */}
                    <div className="bg-black/50 rounded-2xl p-6 border border-white/10 font-mono text-xs md:text-sm text-gray-300 overflow-x-auto shadow-2xl">
                        <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <pre>
                            <span className="text-purple-400">async</span> <span className="text-blue-400">def</span> <span className="text-yellow-400">classify_site</span>(url):
                            <span className="text-gray-500"># 1. Scrape Content</span>
                            content = <span className="text-purple-400">await</span> scraper.get_text(url)

                            <span className="text-gray-500"># 2. Extract Keywords (TF-IDF)</span>
                            vectorizer = TfidfVectorizer()
                            keywords = vectorizer.fit_transform([content])

                            <span className="text-gray-500"># 3. AI Analysis</span>
                            category = <span className="text-purple-400">await</span> gemini.predict(
                            model=<span className="text-green-400">"gemini-pro"</span>,
                            prompt=<span className="text-green-400">f"Classify based on: &#123;keywords&#125;"</span>
                            )

                            <span className="text-purple-400">return</span> category
                        </pre>
                    </div>
                </div>
            </div>

            <div className="mt-24 text-center">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Need a custom data solution?</h2>
                <a href="/#contact" className="inline-block px-8 py-4 rounded-full bg-cyan-600 text-white font-bold hover:bg-cyan-700 transition-all shadow-lg hover:shadow-cyan-500/25">
                    Discuss Your Data Needs
                </a>
            </div>

        </div>
    );
};

export default DataInstructionTool;
