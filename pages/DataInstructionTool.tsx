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
import SEO from '../components/SEO';
import { creativeWorkJsonLd } from '../lib/seo';

const DataInstructionTool: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="pt-24 pb-20 container mx-auto px-6">
            <SEO
                title="Data Instruction Tool | Python ETL and AI Classification"
                description="Case study for a Python data instruction tool that compares Excel files, scrapes websites, performs fuzzy matching, extracts TF-IDF keywords, and classifies data with Gemini."
                path="/data-instruction-tool"
                type="article"
                jsonLd={creativeWorkJsonLd(
                    'Data Instruction Tool',
                    'A Python framework for Excel comparison, web scraping, fuzzy matching, TF-IDF keyword extraction, and Gemini classification.',
                    ['Python', 'Excel', 'Selenium', 'AsyncIO', 'Multiprocessing', 'Fuzzy Logic', 'TF-IDF', 'Gemini'],
                    '/data-instruction-tool',
                )}
            />
            {/* Back Button */}
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white mb-12 transition-colors">
                <ArrowLeft size={20} />
                Back to Portfolio
            </Link>

            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 text-sm font-medium mb-6">
                    <Database size={14} />
                    <span>Data Engineering & ML</span>
                </div>
                <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-900 dark:text-white">
                    A <span className="text-orange-600 dark:text-orange-400">Data Instruction</span> engine for comparison and classification.
                </h1>
                <p className="text-xl text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    A heavy-duty Python framework for extracting, comparing, and classifying massive datasets using parallel processing and generative AI.
                </p>
            </div>

            {/* Core Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                <h2 className="sr-only">Data Instruction Tool Capabilities</h2>
                <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <FileSpreadsheet size={120} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                        <Merge className="text-orange-500" /> Smart Comparison
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400 mb-6 leading-relaxed">
                        Algorithmically compares multiple Excel files to identify discrepancies. Features a <strong>Fuzzy Logic</strong> engine that detects partial matches such as "Apple Inc." and "Apple Incorporated" for faster manual review.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-500 dark:text-gray-400">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>Row-by-row & Column-mapping analysis</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>Levenshtein distance matching</li>
                    </ul>
                </div>

                <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <BrainCircuit size={120} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                        <Bot className="text-orange-500" /> AI Classification
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400 mb-6 leading-relaxed">
                        Automatically categorizes websites into product groups. The tool utilizes the <strong>TF-IDF algorithm</strong> to extract statistical keywords, then feeds them into <strong>Gemini</strong> for high-level semantic classification.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-500 dark:text-gray-400">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>Keyword density analysis</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>LLM-based sector determination</li>
                    </ul>
                </div>
            </div>

            <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-24" aria-labelledby="data-tool-overview">
                <h2 id="data-tool-overview" className="sr-only">Project Overview</h2>
                {[
                    ['Context', 'Large data review tasks can involve Excel comparison, website scraping, duplicate detection, and manual classification.'],
                    ['What was built', 'A Python framework that extracts, compares, classifies, and exports structured data through a repeatable pipeline.'],
                    ['Technologies used', 'Python, Selenium, AsyncIO, Multiprocessing, Fuzzy Logic, Levenshtein distance, TF-IDF, Gemini, Excel, and SQL Database.'],
                    ['Purpose', 'Support faster review of spreadsheet and website data by combining deterministic matching with AI classification.'],
                ].map(([title, body]) => (
                    <article key={title} className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-white/5">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
                        <p className="text-slate-600 dark:text-gray-400 leading-relaxed">{body}</p>
                    </article>
                ))}
            </section>

            {/* Technical Detail Section */}
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
                {/* Decorative background grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-display font-bold text-white mb-6">Built for Speed & Scale</h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Web scraping and data processing can be slow when tasks run sequentially. This tool leverages <strong>Python's AsyncIO</strong> and <strong>Multiprocessing</strong> to run scraping and processing tasks in parallel.
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
                                    <Globe className="text-orange-400" size={24} />
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
                            <span className="text-orange-400">async</span> <span className="text-orange-400">def</span> <span className="text-yellow-400">classify_site</span>(url):
                            <span className="text-gray-500"># 1. Scrape Content</span>
                            content = <span className="text-orange-400">await</span> scraper.get_text(url)

                            <span className="text-gray-500"># 2. Extract Keywords (TF-IDF)</span>
                            vectorizer = TfidfVectorizer()
                            keywords = vectorizer.fit_transform([content])

                            <span className="text-gray-500"># 3. AI Analysis</span>
                            category = <span className="text-orange-400">await</span> gemini.predict(
                            model=<span className="text-green-400">"gemini-pro"</span>,
                            prompt=<span className="text-green-400">f"Classify based on: &#123;keywords&#125;"</span>
                            )

                            <span className="text-orange-400">return</span> category
                        </pre>
                    </div>
                </div>
            </div>

            <div className="mt-24 text-center">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Need a custom data solution?</h2>
                <a href="/#contact" className="inline-block px-8 py-4 rounded-full bg-neon text-white font-bold hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/25">
                    Discuss Your Data Needs
                </a>
            </div>

        </main>
    );
};

export default DataInstructionTool;
