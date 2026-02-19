"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-100 dark:bg-hero-gradient">
            {/* Animated background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-noise opacity-20 dark:opacity-40" />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 -right-32 w-[700px] h-[700px] rounded-full bg-blue-200/40 dark:bg-electric/20 blur-[150px]"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-violet-200/30 dark:bg-violet/15 blur-[130px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-200/20 dark:bg-cyan/10 blur-[120px]"
                />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-electric/30"
                        style={{
                            top: `${15 + i * 15}%`,
                            left: `${10 + i * 16}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.7,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-[1280px] mx-auto px-6 sm:px-8 w-full pt-28 pb-20 md:pt-36 md:pb-28 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                            className="inline-flex items-center gap-2.5 glass-light rounded-full px-5 py-2 mb-10"
                        >
                            <Sparkles className="w-3.5 h-3.5 text-electric" />
                            <span className="text-[11px] font-semibold text-electric/80 tracking-[0.15em] uppercase">
                                Enterprise AI Architecture
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                            className="text-[42px] sm:text-[56px] lg:text-[68px] font-bold text-slate-900 dark:text-white leading-[1.05] tracking-[-0.03em] mb-7"
                        >
                            We Don&apos;t Sell AI.
                            <br />
                            <span className="text-gradient">We Architect</span>
                            <br />
                            Revenue Systems.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                            className="text-[17px] text-slate-500 dark:text-navy-200 leading-[1.8] max-w-lg mb-12"
                        >
                            IT Alliance AI builds AI-native revenue architectures that
                            transform how enterprises acquire, convert, and retain — at scale,
                            with precision.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a
                                href="#cta"
                                className="group relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-electric to-violet text-white font-semibold px-8 py-4 rounded-xl shadow-glow-md hover:shadow-glow-lg transition-all duration-500 text-[15px] overflow-hidden"
                            >
                                <span className="relative z-10">Schedule Executive Briefing</span>
                                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-r from-violet to-electric opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </a>
                            <a
                                href="#architecture"
                                className="inline-flex items-center justify-center gap-2.5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white font-semibold px-8 py-4 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 text-[15px]"
                            >
                                View Architecture
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Visual — Animated orbital */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative w-full aspect-square max-w-[520px] mx-auto">
                            {/* Glow behind */}
                            <div className="absolute inset-0 bg-glow-blue opacity-40" />
                            <div className="absolute inset-20 bg-glow-violet opacity-30" />

                            {/* Orbital rings */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-6 rounded-full border border-electric/10"
                            >
                                <div className="absolute -top-1.5 left-1/2 w-3 h-3 rounded-full bg-electric/40 shadow-glow-sm" />
                            </motion.div>
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-16 rounded-full border border-violet/10"
                            >
                                <div className="absolute top-1/2 -right-1.5 w-3 h-3 rounded-full bg-violet/40 shadow-glow-violet" />
                            </motion.div>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-28 rounded-full border border-cyan/10"
                            >
                                <div className="absolute -bottom-1 left-1/4 w-2 h-2 rounded-full bg-cyan/40" />
                            </motion.div>

                            {/* Center core */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.06, 1] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-24 h-24 rounded-2xl bg-gradient-to-br from-electric/20 to-violet/20 border border-slate-200/50 dark:border-white/10 flex items-center justify-center shadow-glow-md backdrop-blur-sm"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric to-violet shadow-glow-sm" />
                                </motion.div>
                            </div>

                            {/* Outer floating nodes */}
                            {[0, 1, 2, 3, 4, 5].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1 + i * 0.15, duration: 0.5 }}
                                    className="absolute"
                                    style={{
                                        top: `${50 + 38 * Math.sin((i * Math.PI * 2) / 6)}%`,
                                        left: `${50 + 38 * Math.cos((i * Math.PI * 2) / 6)}%`,
                                        transform: "translate(-50%, -50%)",
                                    }}
                                >
                                    <motion.div
                                        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
                                        transition={{
                                            duration: 2.5,
                                            delay: i * 0.4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-electric to-violet shadow-glow-sm"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
