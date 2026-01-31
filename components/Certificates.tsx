import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface Certificate {
    name: string;
    issuer: string;
    logo: string;
    link?: string;
}

const CERTIFICATES: Certificate[] = [
    {
        name: "Create Generative AI Apps on Google Cloud",
        issuer: "Google",
        logo: "google",
    },
    {
        name: "Introduction to Generative AI",
        issuer: "Google",
        logo: "google",
    },
    {
        name: "Deep Learning with Keras and Tensorflow",
        issuer: "IBM",
        logo: "ibm",
    },
    {
        name: "Introduction to Deep Learning and Neural Networks",
        issuer: "IBM",
        logo: "ibm",
    },
    {
        name: "Machine Learning with Python",
        issuer: "IBM",
        logo: "ibm",
    },
    {
        name: "Version Control: Git and GitHub",
        issuer: "BTK Academy",
        logo: "btk",
    }
];

const Certificates: React.FC = () => {
    return (
        <section id="certificates" className="py-20 bg-slate-50/50 dark:bg-void/30">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <h2 className="font-display text-4xl font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-3">
                        <Award className="text-neon" size={32} />
                        Certificates
                    </h2>
                    <p className="text-slate-600 dark:text-gray-400">Continuous learning and professional development.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {CERTIFICATES.map((cert, index) => (
                        <div key={index} className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-neon/50 dark:hover:border-neon/50 transition-all group hover:-translate-y-1">
                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-3 rounded-xl bg-slate-100 dark:bg-white/5`}>
                                    {cert.logo === 'google' && (
                                        <span className="font-bold text-xl text-slate-700 dark:text-white">G</span>
                                    )}
                                    {cert.logo === 'ibm' && (
                                        <span className="font-mono font-bold text-xl text-blue-600 dark:text-blue-400">IBM</span>
                                    )}
                                    {cert.logo === 'btk' && (
                                        <span className="font-bold text-lg text-red-600 dark:text-red-400">BTK</span>
                                    )}
                                </div>
                                {cert.link && <ExternalLink size={16} className="text-slate-400 dark:text-gray-500 group-hover:text-neon" />}
                            </div>
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-neon transition-colors">
                                {cert.name}
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-gray-400">
                                Issued by <span className="font-semibold text-slate-700 dark:text-gray-300">{cert.issuer}</span>
                            </p>
                        </div>
                    ))}
                </div>

                {/* Company Logo Slider */}
                <div className="w-full overflow-hidden border-t border-slate-200 dark:border-white/5 pt-12">
                    <p className="text-center text-sm font-medium text-slate-400 dark:text-gray-500 mb-8 uppercase tracking-widest">Certified By</p>

                    <div className="relative flex overflow-x-hidden group">
                        <div className="animate-marquee flex gap-16 items-center whitespace-nowrap min-w-full px-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Logo Group 1 */}
                            <span className="text-3xl font-bold text-slate-400 dark:text-white/60">Google</span>
                            <span className="text-3xl font-mono font-bold text-slate-400 dark:text-white/60">IBM</span>
                            <span className="text-3xl font-bold text-slate-400 dark:text-white/60">BTK <span className="font-light">ACADEMY</span></span>
                            <span className="text-3xl font-bold text-slate-400 dark:text-white/60">Google</span>
                            <span className="text-3xl font-mono font-bold text-slate-400 dark:text-white/60">IBM</span>
                            <span className="text-3xl font-bold text-slate-400 dark:text-white/60">BTK <span className="font-light">ACADEMY</span></span>
                        </div>

                        <div className="animate-marquee flex gap-16 items-center whitespace-nowrap min-w-full px-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Logo Group 2 (Duplicate for seamless loop) */}
                            {/* Note: In standard marquee with 2 flex items, we rely on them being side-by-side. 
                                 However, Tailwind's animate-marquee usually translates -100%. 
                                 If we use two identical divs in a flex row, seeing the second one chase the first one is standard. 
                             */}
                            <span className="text-3xl font-bold text-slate-400 dark:text-white/60">Google</span>
                            <span className="text-3xl font-mono font-bold text-slate-400 dark:text-white/60">IBM</span>
                            <span className="text-3xl font-bold text-slate-400 dark:text-white/60">BTK <span className="font-light">ACADEMY</span></span>
                            <span className="text-3xl font-bold text-slate-400 dark:text-white/60">Google</span>
                            <span className="text-3xl font-mono font-bold text-slate-400 dark:text-white/60">IBM</span>
                            <span className="text-3xl font-bold text-slate-400 dark:text-white/60">BTK <span className="font-light">ACADEMY</span></span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Certificates;
