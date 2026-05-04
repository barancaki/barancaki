import React, { useEffect } from 'react';
import {
    UserPlus,
    Search,
    Linkedin,
    Mail,
    Database,
    CheckCircle2,
    ArrowLeft,
    Zap,
    ShieldCheck,
    Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { creativeWorkJsonLd } from '../lib/seo';

const LinkedinLeadGen: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="pt-24 pb-20 container mx-auto px-6">
            <SEO
                title="LinkedIn Lead Gen Engine | n8n Automation Case Study"
                description="Case study for an n8n lead generation workflow that searches profiles, extracts public data, enriches contact records, validates email patterns, and syncs leads to a CRM or Google Sheet."
                path="/linkedin-lead-gen"
                type="article"
                jsonLd={creativeWorkJsonLd(
                    'LinkedIn Lead Gen Engine',
                    'An n8n automation workflow for lead search, profile extraction, enrichment, validation, and CRM or Google Sheets sync.',
                    ['n8n', 'LinkedIn', 'CRM', 'Google Sheets', 'lead generation'],
                    '/linkedin-lead-gen',
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
                    <Linkedin size={14} />
                    <span>Automated Sales Workflow</span>
                </div>
                <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-900 dark:text-white">
                    A <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-orange-400">lead generation workflow</span> for structured outreach data.
                </h1>
                <p className="text-xl text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    An n8n workflow that searches for relevant profiles, extracts public profile details, enriches contact records, and organizes leads for CRM or Google Sheets follow-up.
                </p>
            </div>

            {/* Stats / Outcomes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 max-w-5xl mx-auto">
                <h2 className="sr-only">LinkedIn Lead Gen Engine Outcomes</h2>
                <div className="glass-card p-6 rounded-2xl text-center hover:bg-slate-50/50 dark:hover:bg-white/5 transition-all">
                    <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-neon/10 flex items-center justify-center mx-auto mb-4 text-orange-600 dark:text-neon">
                        <Zap size={24} />
                    </div>
                    <h3 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">77x</h3>
                    <p className="text-slate-600 dark:text-gray-400">Faster than Manual Search</p>
                </div>
                <div className="glass-card p-6 rounded-2xl text-center hover:bg-slate-50/50 dark:hover:bg-white/5 transition-all">
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-500/10 flex items-center justify-center mx-auto mb-4 text-green-600 dark:text-green-400">
                        <ShieldCheck size={24} />
                    </div>
                    <h3 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">90%</h3>
                    <p className="text-slate-600 dark:text-gray-400">Verified Email Delivery</p>
                </div>
                <div className="glass-card p-6 rounded-2xl text-center hover:bg-slate-50/50 dark:hover:bg-white/5 transition-all">
                    <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center mx-auto mb-4 text-orange-600 dark:text-orange-400">
                        <Clock size={24} />
                    </div>
                    <h3 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">100%</h3>
                    <p className="text-slate-600 dark:text-gray-400">Automated Workflow Execution</p>
                </div>
            </div>

            <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-24" aria-labelledby="linkedin-overview">
                <h2 id="linkedin-overview" className="sr-only">Project Overview</h2>
                {[
                    ['Context', 'Manual lead research creates repetitive search, extraction, validation, and formatting work before outreach can begin.'],
                    ['What was built', 'An n8n workflow that turns defined audience criteria into structured lead records.'],
                    ['Technologies used', 'n8n, LinkedIn profile extraction, SMTP validation, CRM, and Google Sheets.'],
                    ['Purpose', 'Prepare cleaner lead data for sales outreach with less manual data entry.'],
                ].map(([title, body]) => (
                    <article key={title} className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-white/5">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
                        <p className="text-slate-600 dark:text-gray-400 leading-relaxed">{body}</p>
                    </article>
                ))}
            </section>

            {/* Deep Dive Steps */}
            <div className="max-w-4xl mx-auto space-y-8">
                <h2 className="font-display text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">How It Works</h2>

                {/* Step 1 */}
                <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-white/5 hover:border-neon dark:hover:border-neon/30 transition-all group">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="p-4 rounded-2xl bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
                            <UserPlus size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">1. Intelligent Criteria Definition</h3>
                            <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-4">
                                The process starts with precision. Instead of generic searches, the system accepts strict boolean parameters:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {['Target Industry (e.g., SaaS, Logistics)', 'Decision Maker Titles (CEO, CTO)', 'Geographic Location', 'Company Size Range'].map(item => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-slate-500 dark:text-gray-300">
                                        <CheckCircle2 size={16} className="text-neon" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-white/5 hover:border-neon dark:hover:border-neon/30 transition-all group">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="p-4 rounded-2xl bg-orange-100 dark:bg-neon/10 text-orange-600 dark:text-neon group-hover:scale-110 transition-transform">
                            <Search size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">2. Search Agent Execution</h3>
                            <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-4">
                                The workflow uses advanced boolean logic to find public LinkedIn profile results that match the selected criteria.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-white/5 hover:border-neon dark:hover:border-neon/30 transition-all group">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="p-4 rounded-2xl bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
                            <Linkedin size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">3. Deep Profile Extraction</h3>
                            <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-4">
                                Once candidates are identified, a specialized scraper visits the public profile to extract rich metadata. It's not just a name; it's a full professional snapshot.
                            </p>
                            <div className="bg-slate-100 dark:bg-void/50 p-4 rounded-xl border border-slate-200 dark:border-white/5 text-sm font-mono text-slate-600 dark:text-gray-400">
                                {`{ "name": "...", "experience": [...], "skills": [...], "activity": "..." }`}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-white/5 hover:border-yellow-500 dark:hover:border-yellow-400/30 transition-all group">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="p-4 rounded-2xl bg-yellow-100 dark:bg-yellow-400/10 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform">
                            <Mail size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">4. Multi-Layer Enrichment & Validation</h3>
                            <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-4">
                                The system uses permutation algorithms and SMTP pinging to validate corporate email patterns such as <em>firstname.lastname@company.com</em>. It also cross-references available data to format outreach records.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Step 5 */}
                <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-white/5 hover:border-green-500 dark:hover:border-green-400/30 transition-all group">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="p-4 rounded-2xl bg-green-100 dark:bg-green-400/10 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                            <Database size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">5. Sync & Action</h3>
                            <p className="text-slate-600 dark:text-gray-400 leading-relaxed max-w-lg">
                                Finally, clean, structured data is pushed instantly to your <strong>CRM</strong> (HubSpot, Salesforce) or a master <strong>Google Sheet</strong>, ready for your sales team to engage.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-24 text-center">
                <p className="text-slate-500 dark:text-gray-500 mb-6">Ready to automate your pipeline?</p>
                <a href="/#contact" className="inline-block px-8 py-4 rounded-full bg-neon text-white font-bold hover:bg-orange-700 transition-all shadow-[0_4px_20px_-5px_rgba(232,98,42,0.4)] dark:shadow-[0_0_30px_-10px_rgba(232,98,42,0.5)]">
                    Discuss This Workflow
                </a>
            </div>

        </main>
    );
};

export default LinkedinLeadGen;
