"use client";

import { motion } from "framer-motion";

export default function BlogHeader() {
    return (
        <section className="relative pt-24 pb-12 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-electric/10 rounded-full blur-[120px] opacity-30 animate-pulse" />
                <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-violet/10 rounded-full blur-[150px] opacity-20" />
            </div>

            <div className="container relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6 backdrop-blur-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-electric"></span>
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400">Insights & Perspectives</span>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6"
                    >
                        Thinking Beyond the <span className="text-gradient">Ordinary</span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-slate-400 leading-relaxed font-medium"
                    >
                        Explore the intersection of AI, performance marketing, and business transformation. 
                        Our team shares deep dives into the strategies driving the next era of growth.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
