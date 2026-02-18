"use client";

import { motion } from "framer-motion";
import { FadeInView } from "./Section";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
    return (
        <section id="cta" className="relative py-28 md:py-40 overflow-hidden bg-cta-gradient">
            {/* Animated background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-noise opacity-40" />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-electric/15 blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/2 right-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet/10 blur-[100px]"
                />
            </div>

            <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
                <FadeInView>
                    <div className="text-center max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-2 glass-light rounded-full px-5 py-2 mb-8">
                            <Sparkles className="w-3.5 h-3.5 text-electric" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-electric/70">
                                Begin Your Transformation
                            </span>
                        </div>

                        <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-7">
                            Ready to Build Your
                            <br />
                            <span className="text-gradient">AI Revenue Architecture?</span>
                        </h2>

                        <p className="text-[17px] text-navy-200 leading-[1.8] mb-12">
                            Schedule a confidential executive briefing with our architecture
                            team. No pitch decks. No demos. Just a strategic conversation
                            about your revenue future.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.a
                                href="mailto:strategy@itallianceai.com"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                                className="group relative inline-flex items-center gap-2.5 bg-gradient-to-r from-electric to-violet text-white font-semibold px-10 py-4.5 rounded-xl shadow-glow-md hover:shadow-glow-lg transition-all duration-500 text-[15px] overflow-hidden"
                            >
                                <span className="relative z-10">Schedule Executive Briefing</span>
                                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-r from-violet to-electric opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.a>
                            <a
                                href="mailto:strategy@itallianceai.com"
                                className="inline-flex items-center gap-2.5 border border-white/10 text-white/70 font-medium px-10 py-4 rounded-xl hover:bg-white/5 hover:border-white/20 hover:text-white transition-all duration-300 text-[15px]"
                            >
                                strategy@itallianceai.com
                            </a>
                        </div>

                        <p className="text-[11px] text-navy-400 mt-10 tracking-wide">
                            Enterprise inquiries only · NDA-protected · C-suite direct access
                        </p>
                    </div>
                </FadeInView>
            </div>
        </section>
    );
}
