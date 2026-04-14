"use client";

import { motion } from "framer-motion";
import { FadeInView } from "./Section";
import { ArrowRight, Sparkles, Shield, Clock, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CalendlyButton from "./CalendlyButton";

const trustBadges = [
    { icon: Shield, label: "NDA-Protected" },
    { icon: Clock, label: "48hr Response" },
    { icon: Users, label: "C-Suite Direct" },
];

export default function FinalCTA() {
    return (
        <section
            id="cta"
            className="relative py-8 md:py-12 overflow-hidden bg-[#0A0F1C]"
        >
            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/sections/cta-bg.png"
                    alt="Background Mesh"
                    fill
                    className="object-cover opacity-40 mix-blend-screen"
                />
                
                {/* Dynamic Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric/20 rounded-full blur-[140px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-violet/10 rounded-full blur-[120px]" />
                
                {/* Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C] via-transparent to-[#0A0F1C]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C] via-transparent to-[#0A0F1C]" />
            </div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                <FadeInView>
                    <div className="relative max-w-4xl mx-auto rounded-[2rem] p-px bg-gradient-to-b from-white/10 to-transparent">
                        {/* Glass Container */}
                        <div className="relative rounded-[2rem] bg-[#0D1224]/80 backdrop-blur-3xl p-6 md:p-10 overflow-hidden border border-white/5">
                            
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Zap className="w-32 h-32 text-electric" />
                            </div>

                            <div className="text-center relative z-10">
                                {/* Eyebrow badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 mb-6 backdrop-blur-md shadow-glow-sm"
                                >
                                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                                        Begin Your Transformation
                                    </span>
                                </motion.div>

                                {/* Headline */}
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
                                    Ready to Build Your<br />
                                    <span className="text-gradient">AI Revenue Engine?</span>
                                </h2>

                                {/* Subtext */}
                                <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto font-medium">
                                    Step into the future of enterprise growth. Schedule a confidential executive 
                                    briefing to pilot your AI-driven revenue architecture.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                                    <Link
                                        href="/schedule-briefing"
                                        className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-electric to-violet text-white font-black px-8 py-4 rounded-lg shadow-glow-md hover:shadow-glow-lg transition-all duration-500 text-[14px] overflow-hidden"
                                    >
                                        <span className="relative z-10">Schedule Briefing</span>
                                        <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                                        
                                        {/* Shimmer */}
                                        <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
                                    </Link>

                                    <a
                                        href="mailto:strategy@itallianceai.com"
                                        className="inline-flex items-center gap-2 border border-white/10 text-white/70 font-bold px-8 py-4 rounded-lg hover:bg-white/5 hover:border-white/20 hover:text-white transition-all duration-300 text-[14px]"
                                    >
                                        Inquire via Email
                                    </a>
                                </div>

                                {/* Trust badges */}
                                <div className="flex flex-wrap items-center justify-center gap-10 pt-8 border-t border-white/5">
                                    {trustBadges.map(({ icon: Icon, label }) => (
                                        <div
                                            key={label}
                                            className="flex items-center gap-2.5 text-[13px] font-bold text-slate-500 uppercase tracking-widest"
                                        >
                                            <Icon className="w-4 h-4 text-electric/60" />
                                            {label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInView>
            </div>
        </section>
    );
}