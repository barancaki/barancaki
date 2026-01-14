import React, { useEffect } from 'react';
import {
    ScanFace,
    Sparkles,
    Droplets,
    Sun,
    Activity,
    ArrowLeft,
    Smartphone,
    BrainCircuit,
    Database,
    Camera
} from 'lucide-react';
import { Link } from 'react-router-dom';

const RayaAI: React.FC = () => {

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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-500/10 border border-pink-200 dark:border-pink-500/20 text-pink-600 dark:text-pink-400 text-sm font-medium mb-6">
                    <Smartphone size={14} />
                    <span>AI Beauty Tech</span>
                </div>
                <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-900 dark:text-white">
                    Skincare meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Artificial Intelligence</span> via Gemini.
                </h1>
                <p className="text-xl text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    A mobile application that turns your daily selfie into a comprehensive dermatological report, powered by advanced computer vision and LLMs.
                </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                <div className="glass-card p-6 rounded-2xl border border-pink-100 dark:border-white/5 hover:border-pink-300 dark:hover:border-pink-500/30 transition-all">
                    <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-500/10 flex items-center justify-center mb-4 text-pink-600 dark:text-pink-400">
                        <Camera size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Smart Scan</h3>
                    <p className="text-sm text-slate-600 dark:text-gray-400">Analyzes skin texture, hydration, and acne using high-res photo processing.</p>
                </div>
                <div className="glass-card p-6 rounded-2xl border border-pink-100 dark:border-white/5 hover:border-pink-300 dark:hover:border-pink-500/30 transition-all">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
                        <BrainCircuit size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Gemini & OpenAI</h3>
                    <p className="text-sm text-slate-600 dark:text-gray-400">Dual-engine AI analysis for dermatologist-grade accuracy and recommendations.</p>
                </div>
                <div className="glass-card p-6 rounded-2xl border border-pink-100 dark:border-white/5 hover:border-pink-300 dark:hover:border-pink-500/30 transition-all">
                    <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-500/10 flex items-center justify-center mb-4 text-rose-600 dark:text-rose-400">
                        <Database size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Product Comparisons</h3>
                    <p className="text-sm text-slate-600 dark:text-gray-400">Compare your shelf products against your skin data to find the perfect match.</p>
                </div>
                <div className="glass-card p-6 rounded-2xl border border-pink-100 dark:border-white/5 hover:border-pink-300 dark:hover:border-pink-500/30 transition-all">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                        <Activity size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Progress Tracking</h3>
                    <p className="text-sm text-slate-600 dark:text-gray-400">Visual timeline of your skin's improvement over weeks and months.</p>
                </div>
            </div>

            {/* Deep Dive Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white">The Technical Challenge</h2>
                    <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                        Skin analysis requires more than just standard image classification. We needed to detect subtle texture nuances, redness patterns, and hydration levels that vary by lighting conditions.
                    </p>
                    <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                        We utilized <strong>Gemini Vision Pro</strong> for its superior texture recognition capabilities, combined with OpenAI's reasoning engine to generate human-readable, empathetic advice based on the raw data.
                    </p>

                    <div className="p-6 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {['React Native / Flutter', 'Firebase', 'Gemini Vision API', 'OpenAI API', 'TensorFlow Lite', 'Node.js'].map(tech => (
                                <span key={tech} className="px-3 py-1 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/5 text-sm text-slate-600 dark:text-gray-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mockup or Graphic */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                    <div className="glass-card p-8 rounded-3xl border border-pink-200 dark:border-white/10 relative z-10 transform hover:rotate-1 transition-transform duration-500">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="space-y-4 font-mono text-sm">
                            <div className="text-pink-400">const analyzeSkin = async (image) =&gt; {'{'}</div>
                            <div className="pl-4 text-slate-500 dark:text-gray-400">// Extract features using Vision Model</div>
                            <div className="pl-4 text-purple-400">const features = await Gemini.vision(image);</div>
                            <div className="pl-4 text-slate-500 dark:text-gray-400">// Generate personalized plan</div>
                            <div className="pl-4 text-blue-400">const plan = await OpenAI.chat(features);</div>
                            <div className="pl-4 text-slate-900 dark:text-white">return plan;</div>
                            <div className="text-pink-400">{'}'}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-24 text-center">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Ready to transform your routine?</h2>
                <button className="px-8 py-4 rounded-full bg-pink-500 text-white font-bold hover:bg-pink-600 transition-all shadow-[0_4px_20px_-5px_rgba(236,72,153,0.4)]">
                    Download Beta
                </button>
            </div>

        </div>
    );
};

export default RayaAI;
