import React, { useState, useEffect } from 'react';
import { ScanFace, Sparkles, Droplets, Sun, Activity, ArrowRight, Smartphone } from 'lucide-react';

const RayaAiVisualizer: React.FC = () => {
    const [scanState, setScanState] = useState<'idle' | 'scanning' | 'analyzing' | 'complete'>('idle');
    const [progress, setProgress] = useState(0);

    const startScan = () => {
        if (scanState !== 'idle') return;
        setScanState('scanning');
        setProgress(0);
    };

    useEffect(() => {
        if (scanState === 'scanning') {
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setScanState('analyzing');
                        return 100;
                    }
                    return prev + 2;
                });
            }, 30);
            return () => clearInterval(interval);
        }

        if (scanState === 'analyzing') {
            const timeout = setTimeout(() => {
                setScanState('complete');
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [scanState]);

    return (
        <div className="md:col-span-8 glass-card rounded-3xl p-8 relative overflow-hidden group min-h-[400px] flex flex-col justify-between">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-600/5 pointer-events-none"></div>

            {/* Header */}
            <div className="relative z-10 flex justify-between items-start mb-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-500/10">
                            <Sparkles className="text-pink-600 dark:text-pink-400" size={24} />
                        </div>
                        <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">Raya AI</h3>
                    </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-500/10 border border-pink-200 dark:border-pink-500/20 text-xs font-medium text-pink-600 dark:text-pink-400">
                    Mobile App
                </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">

                {/* Visual Interaction Area: The "Phone" */}
                <div className="relative mx-auto w-full max-w-[280px] aspect-[9/16] bg-slate-900 rounded-[2rem] border-4 border-slate-800 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-4">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 w-full h-6 bg-black/50 backdrop-blur flex justify-between px-4 items-center z-20">
                        <div className="w-12 h-3 bg-slate-700/50 rounded-full"></div>
                        <div className="flex gap-1">
                            <div className="w-3 h-3 bg-slate-700/50 rounded-full"></div>
                            <div className="w-3 h-3 bg-slate-700/50 rounded-full"></div>
                        </div>
                    </div>

                    {scanState === 'idle' && (
                        <div className="flex flex-col items-center text-center animate-fade-in">
                            <div className="w-20 h-20 rounded-full bg-pink-500/20 flex items-center justify-center mb-6 relative">
                                <ScanFace size={40} className="text-pink-400" />
                                <div className="absolute inset-0 border border-pink-500/30 rounded-full animate-ping opacity-20"></div>
                            </div>
                            <h4 className="text-white font-medium mb-2">Daily Skin Check</h4>
                            <p className="text-slate-400 text-sm mb-6">Track your skin health with AI analysis.</p>
                            <button
                                onClick={startScan}
                                className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-bold shadow-lg shadow-pink-500/25 hover:scale-105 transition-transform"
                            >
                                Start Scan
                            </button>
                        </div>
                    )}

                    {scanState === 'scanning' && (
                        <div className="w-full h-full absolute inset-0 bg-slate-800">
                            {/* Face Silhouette (Simplified) */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                <ScanFace size={150} className="text-slate-400" />
                            </div>

                            {/* Scanning Line */}
                            <div
                                className="absolute left-0 w-full h-1 bg-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.8)] z-10 transition-all duration-[20ms]"
                                style={{ top: `${progress}%` }}
                            ></div>

                            {/* Grid Overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.1)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
                        </div>
                    )}

                    {scanState === 'analyzing' && (
                        <div className="flex flex-col items-center text-center">
                            <Sparkles className="text-pink-400 animate-spin mb-4" size={32} />
                            <p className="text-white font-medium">Analyzing Texture...</p>
                            <p className="text-slate-400 text-xs">Processing via Gemini Vision</p>
                        </div>
                    )}

                    {scanState === 'complete' && (
                        <div className="w-full h-full pt-8 pb-4 px-2 flex flex-col animate-fade-in bg-slate-900/90">
                            <div className="flex items-center gap-3 mb-6 bg-slate-800/50 p-3 rounded-xl border border-white/5">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                    92
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">Skin Score</h4>
                                    <p className="text-green-400 text-xs flex items-center gap-1">
                                        <Activity size={10} /> +2% from yesterday
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar">
                                <div className="p-3 bg-slate-800/50 rounded-lg border border-pink-500/20">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-xs text-slate-300">Hydration</span>
                                        <span className="text-xs text-pink-400 font-bold">Good</span>
                                    </div>
                                    <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-pink-500 w-[85%] rounded-full"></div>
                                    </div>
                                </div>

                                <div className="p-3 bg-slate-800/50 rounded-lg border border-white/5">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-xs text-slate-300">Oiliness</span>
                                        <span className="text-xs text-yellow-400 font-bold">Moderate</span>
                                    </div>
                                    <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-yellow-400 w-[60%] rounded-full"></div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <p className="text-xs text-slate-500 uppercase font-bold mb-2">Recommendation</p>
                                    <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg border border-white/5">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[10px] text-blue-600 font-bold">Hy</div>
                                        <div className="text-xs text-slate-300">Hyaluronic Acid Serum</div>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => setScanState('idle')}
                                className="mt-4 w-full py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs text-slate-300 transition-colors"
                            >
                                Done
                            </button>
                        </div>
                    )}
                </div>

                {/* Info / Text Area */}
                <div className="flex flex-col justify-center">
                    <p className="text-slate-600 dark:text-gray-400 mb-6 leading-relaxed">
                        Your personal AI dermatologist. Snap a daily selfie and let Gemini & OpenAI analyze your skin health.
                        Get tailored product recommendations and track progress over time.
                    </p>

                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-gray-300">
                            <ScanFace size={16} className="text-pink-500" />
                            <span>AI-Powered Skin Analysis</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-gray-300">
                            <Sparkles size={16} className="text-pink-500" />
                            <span>Smart Product Recommendations</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-gray-300">
                            <Activity size={16} className="text-pink-500" />
                            <span>Routine & Progress Tracking</span>
                        </li>
                    </ul>

                    <a
                        href="/raya-ai"
                        className="inline-flex items-center gap-2 text-pink-600 dark:text-pink-400 font-medium hover:gap-3 transition-all group/link"
                    >
                        View Case Study
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RayaAiVisualizer;
