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
import SEO from '../components/SEO';
import { creativeWorkJsonLd } from '../lib/seo';

const RayaAI: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="pt-24 pb-20 container mx-auto px-6">
            <SEO
                title="Raya AI | AI Skincare Mobile App Case Study"
                description="Case study for Raya AI, a beta mobile app using Gemini, OpenAI, Firebase, TensorFlow Lite, and Node.js for skin analysis, product comparison, and progress tracking."
                path="/raya-ai"
                type="article"
                jsonLd={creativeWorkJsonLd(
                    'Raya AI',
                    'An AI-powered skincare mobile app concept for skin analysis, product comparison, and routine progress tracking.',
                    ['React Native', 'Flutter', 'Firebase', 'Gemini Vision API', 'OpenAI API', 'TensorFlow Lite', 'Node.js'],
                    '/raya-ai',
                )}
            />
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
                    Skincare analysis with <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Gemini and OpenAI</span>.
                </h1>
                <p className="text-xl text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    A beta mobile application concept that uses computer vision and LLMs to support skin analysis, product comparison, and routine progress tracking.
                </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                <h2 className="sr-only">Raya AI Features</h2>
                <div className="glass-card p-6 rounded-2xl border border-pink-100 dark:border-white/5 hover:border-pink-300 dark:hover:border-pink-500/30 transition-all">
                    <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-500/10 flex items-center justify-center mb-4 text-pink-600 dark:text-pink-400">
                        <Camera size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Smart Scan</h3>
                    <p className="text-sm text-slate-600 dark:text-gray-400">Analyzes skin texture, hydration, and acne using high-res photo processing.</p>
                </div>
                <div className="glass-card p-6 rounded-2xl border border-pink-100 dark:border-white/5 hover:border-pink-300 dark:hover:border-pink-500/30 transition-all">
                    <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center mb-4 text-orange-600 dark:text-orange-400">
                        <BrainCircuit size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Gemini & OpenAI</h3>
                    <p className="text-sm text-slate-600 dark:text-gray-400">Dual-engine AI analysis for structured skin observations and recommendations.</p>
                </div>
                <div className="glass-card p-6 rounded-2xl border border-pink-100 dark:border-white/5 hover:border-pink-300 dark:hover:border-pink-500/30 transition-all">
                    <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-500/10 flex items-center justify-center mb-4 text-rose-600 dark:text-rose-400">
                        <Database size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Product Comparisons</h3>
                    <p className="text-sm text-slate-600 dark:text-gray-400">Compare your shelf products against your skin data to find the perfect match.</p>
                </div>
                <div className="glass-card p-6 rounded-2xl border border-pink-100 dark:border-white/5 hover:border-pink-300 dark:hover:border-pink-500/30 transition-all">
                    <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center mb-4 text-orange-600 dark:text-orange-400">
                        <Activity size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Progress Tracking</h3>
                    <p className="text-sm text-slate-600 dark:text-gray-400">Visual timeline of your skin's improvement over weeks and months.</p>
                </div>
            </div>

            <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-24" aria-labelledby="raya-overview">
                <h2 id="raya-overview" className="sr-only">Project Overview</h2>
                {[
                    ['Context', 'Skin tracking requires repeatable image analysis, product context, and progress views that are understandable to everyday users.'],
                    ['What was built', 'A mobile app experience for daily skin scans, recommendations, product comparisons, and visual progress tracking.'],
                    ['Technologies used', 'React Native, Flutter, Firebase, Gemini Vision API, OpenAI API, TensorFlow Lite, and Node.js.'],
                    ['Purpose', 'Help users review skin observations and compare routine changes over time in a beta mobile workflow.'],
                ].map(([title, body]) => (
                    <article key={title} className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-white/5">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
                        <p className="text-slate-600 dark:text-gray-400 leading-relaxed">{body}</p>
                    </article>
                ))}
            </section>

            {/* Deep Dive Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white">Technical Context</h2>
                    <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                        Skin analysis requires more than just standard image classification. We needed to detect subtle texture nuances, redness patterns, and hydration levels that vary by lighting conditions.
                    </p>
                    <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                        The app uses <strong>Gemini Vision Pro</strong> for visual analysis and OpenAI for human-readable guidance based on the extracted observations.
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
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                    <div className="glass-card p-8 rounded-3xl border border-pink-200 dark:border-white/10 relative z-10 transform hover:rotate-1 transition-transform duration-500">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="space-y-4 font-mono text-sm">
                            <div className="text-pink-400">const analyzeSkin = async (image) =&gt; {'{'}</div>
                            <div className="pl-4 text-slate-500 dark:text-gray-400">// Extract features using Vision Model</div>
                            <div className="pl-4 text-orange-400">const features = await Gemini.vision(image);</div>
                            <div className="pl-4 text-slate-500 dark:text-gray-400">// Generate personalized plan</div>
                            <div className="pl-4 text-orange-400">const plan = await OpenAI.chat(features);</div>
                            <div className="pl-4 text-slate-900 dark:text-white">return plan;</div>
                            <div className="text-pink-400">{'}'}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-24 text-center">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Ready to transform your routine?</h2>
                <a href="/#contact" className="inline-block px-8 py-4 rounded-full bg-pink-500 text-white font-bold hover:bg-pink-600 transition-all shadow-[0_4px_20px_-5px_rgba(236,72,153,0.4)]">
                    Ask About Beta Access
                </a>
            </div>

        </main>
    );
};

export default RayaAI;
