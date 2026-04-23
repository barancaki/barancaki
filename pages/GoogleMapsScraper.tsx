import React, { useEffect } from 'react';
import {
    MapPin,
    LayoutGrid,
    Map,
    Globe,
    FileSpreadsheet,
    ArrowLeft,
    CheckCircle2,
    Zap,
    Target,
    Coins
} from 'lucide-react';
import { Link } from 'react-router-dom';

const GoogleMapsScraper: React.FC = () => {

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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm font-medium mb-6">
                    <MapPin size={14} />
                    <span>Local Business Intelligence</span>
                </div>
                <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-900 dark:text-white">
                    Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-400 dark:to-red-400">Hyper-Local</span> market data at scale.
                </h1>
                <p className="text-xl text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    A geospatial harvesting engine that maps, extracts, and enriches data from every local business in any city.
                    Zero missed leads. Zero API costs.
                </p>
            </div>

            {/* Stats / Outcomes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 max-w-5xl mx-auto">
                <div className="glass-card p-6 rounded-2xl text-center hover:bg-slate-50/50 dark:hover:bg-white/5 transition-all">
                    <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center mx-auto mb-4 text-orange-600 dark:text-orange-400">
                        <Zap size={24} />
                    </div>
                    <h3 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">5k+</h3>
                    <p className="text-slate-600 dark:text-gray-400">Leads Per Hour</p>
                </div>
                <div className="glass-card p-6 rounded-2xl text-center hover:bg-slate-50/50 dark:hover:bg-white/5 transition-all">
                    <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-500/10 flex items-center justify-center mx-auto mb-4 text-red-600 dark:text-red-400">
                        <Target size={24} />
                    </div>
                    <h3 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">100%</h3>
                    <p className="text-slate-600 dark:text-gray-400">Coverage (Grid Search)</p>
                </div>
                <div className="glass-card p-6 rounded-2xl text-center hover:bg-slate-50/50 dark:hover:bg-white/5 transition-all">
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-500/10 flex items-center justify-center mx-auto mb-4 text-green-600 dark:text-green-400">
                        <Coins size={24} />
                    </div>
                    <h3 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">$0</h3>
                    <p className="text-slate-600 dark:text-gray-400">API Cost</p>
                </div>
            </div>

            {/* Deep Dive Steps */}
            <div className="max-w-4xl mx-auto space-y-8">
                <h2 className="font-display text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">How It Works</h2>

                {/* Step 1 */}
                <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-white/5 hover:border-red-400 dark:hover:border-red-500/30 transition-all group">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="p-4 rounded-2xl bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform">
                            <MapPin size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">1. Target Area Definition</h3>
                            <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-4">
                                You don't just search "plumbers in New York". You define a precise bounding box or radius. The system accepts coordinates or city names to establish the initial search perimeter.
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {['City / Region', 'Specific Keywords', 'Language Settings', 'Coordinates'].map(item => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-slate-500 dark:text-gray-300">
                                        <CheckCircle2 size={16} className="text-orange-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-white/5 hover:border-orange-400 dark:hover:border-orange-500/30 transition-all group">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="p-4 rounded-2xl bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
                            <LayoutGrid size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">2. Intelligent Grid Division</h3>
                            <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-4">
                                Google Maps limits results to 120 per search. To bypass this, our agent divides the target area into a micro-grid of sub-coordinates. It recursively searches each cell, ensuring no business is left behind, even in dense areas like downtown Manhattan.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-white/5 hover:border-neon dark:hover:border-neon/30 transition-all group">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="p-4 rounded-2xl bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
                            <Map size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">3. Place Data Extraction</h3>
                            <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-4">
                                For every pin found, the system extracts available high-value metadata directly from the source.
                            </p>
                            <div className="bg-slate-100 dark:bg-void/50 p-4 rounded-xl border border-slate-200 dark:border-white/5 text-sm font-mono text-slate-600 dark:text-gray-400">
                                {`{ "name": "Joe's Pizza", "phone": "+1-212-...", "rating": 4.8, "reviews": 1250 }`}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-white/5 hover:border-orange-400 dark:hover:border-orange-500/30 transition-all group">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="p-4 rounded-2xl bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
                            <Globe size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">4. Web Check & Enrichment</h3>
                            <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-4">
                                A simple map result often lacks direct contact info. This step acts as a secondary agent: it visits the business's website (if available), scans for "Contact Us" pages, and extracts direct emails and social media handles (Facebook, Instagram, LinkedIn).
                            </p>
                        </div>
                    </div>
                </div>

                {/* Step 5 */}
                <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-white/5 hover:border-green-400 dark:hover:border-green-500/30 transition-all group">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="p-4 rounded-2xl bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                            <FileSpreadsheet size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">5. Export to CSV</h3>
                            <p className="text-slate-600 dark:text-gray-400 leading-relaxed max-w-lg">
                                The final output is a de-duplicated, clean dataset containing thousands of verified local leads, ready for cold calling or email marketing campaigns.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-24 text-center">
                <p className="text-slate-500 dark:text-gray-500 mb-6">Need local data?</p>
                <a href="/#contact" className="inline-block px-8 py-4 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all shadow-[0_4px_20px_-5px_rgba(249,115,22,0.4)] dark:shadow-[0_0_30px_-10px_rgba(249,115,22,0.5)]">
                    Start Harvesting
                </a>
            </div>

        </div>
    );
};

export default GoogleMapsScraper;
