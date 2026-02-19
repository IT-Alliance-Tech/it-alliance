"use client";

import { motion } from "framer-motion";
import { FadeInView } from "./Section";
import { ArrowRight, Sparkles, Shield, Clock, Users } from "lucide-react";

const trustBadges = [
    { icon: Shield, label: "NDA-Protected" },
    { icon: Clock, label: "48hr Response" },
    { icon: Users, label: "C-Suite Direct" },
];

export default function FinalCTA() {
    return (
        <section
            id="cta"
            className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:bg-cta-gradient"
        >
            {/* Animated background glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-noise opacity-20 dark:opacity-40" />

                {/* Primary glow */}
                <motion.div
                    animate={{ scale: [1, 1.25, 1], opacity: [0.12, 0.28, 0.12] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-300/25 dark:bg-electric/15 blur-[140px]"
                />

                {/* Secondary glow */}
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.18, 0.08] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-300/20 dark:bg-violet/10 blur-[120px]"
                />

                {/* Subtle grid lines */}
                <div
                    className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />

                {/* Top & bottom fade masks */}
                <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-slate-50 dark:from-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-slate-100 dark:from-transparent to-transparent" />
            </div>

            <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
                <FadeInView>
                    <div className="text-center max-w-2xl mx-auto">

                        {/* Eyebrow badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 glass-light rounded-full px-5 py-2 mb-8 border border-blue-100/60 dark:border-white/10 shadow-sm"
                        >
                            <Sparkles className="w-3.5 h-3.5 text-electric" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-electric/80">
                                Begin Your Transformation
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <h2 className="text-[32px] sm:text-[44px] lg:text-[58px] font-bold text-slate-900 dark:text-white leading-[1.06] tracking-[-0.03em] mb-7">
                            Ready to Build Your
                            <br />
                            <span className="text-gradient">AI Revenue Architecture?</span>
                        </h2>

                        {/* Subtext */}
                        <p className="text-[17px] text-slate-500 dark:text-navy-200 leading-[1.85] mb-12 max-w-xl mx-auto">
                            Schedule a confidential executive briefing with our architecture
                            team. No pitch decks. No demos. Just a strategic conversation
                            about your revenue future.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">

                            {/* Primary CTA — fixed padding, shimmer overlay */}
                            <motion.a
                                href="mailto:strategy@itallianceai.com"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.2 }}
                                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-electric to-violet text-white font-semibold px-10 py-[18px] rounded-xl shadow-glow-md hover:shadow-glow-lg transition-shadow duration-500 text-[15px] overflow-hidden leading-none"
                            >
                                {/* Shimmer sweep */}
                                <span
                                    aria-hidden
                                    className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
                                />

                                {/* Hover colour flip */}
                                <span
                                    aria-hidden
                                    className="absolute inset-0 bg-gradient-to-r from-violet to-electric opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />

                                <span className="relative z-10">Schedule Executive Briefing</span>
                                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                            </motion.a>

                            {/* Secondary / email link */}
                            <a
                                href="mailto:strategy@itallianceai.com"
                                className="inline-flex items-center gap-2.5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-white/60 font-medium px-10 py-[18px] rounded-xl hover:bg-white dark:hover:bg-white/5 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-900 dark:hover:text-white transition-all duration-300 text-[15px] leading-none shadow-sm"
                            >
                                strategy@itallianceai.com
                            </a>
                        </div>

                        {/* Trust badges */}
                        <div className="flex items-center justify-center gap-6 flex-wrap">
                            {trustBadges.map(({ icon: Icon, label }) => (
                                <div
                                    key={label}
                                    className="flex items-center gap-1.5 text-[12px] text-slate-400 dark:text-navy-400 tracking-wide"
                                >
                                    <Icon className="w-3.5 h-3.5 opacity-60" />
                                    {label}
                                </div>
                            ))}
                        </div>

                        {/* Fine print */}
                        <p className="text-[11px] text-slate-400 dark:text-navy-500 mt-6 tracking-wide">
                            Enterprise inquiries only · Responses within 48 hours
                        </p>
                    </div>
                </FadeInView>
            </div>
        </section>
    );
}