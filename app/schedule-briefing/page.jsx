"use client";

import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Shield, Clock, Users, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ScheduleBriefingPage() {
    return (
        <main className="bg-[#0A0F1C] min-h-screen selection:bg-electric/30">
            <Navbar />

            {/* Page Hero */}
            <section className="relative pt-32 pb-12 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-electric/5 rounded-full blur-[120px] opacity-20" />
                </div>

                <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
                    <Link 
                        href="/" 
                        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-12 group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 mb-8 backdrop-blur-md shadow-glow-sm"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                            Executive Inquiry
                        </span>
                    </motion.div>

                    <h1 className="text-[32px] sm:text-[42px] lg:text-[52px] font-bold text-white leading-[1.08] tracking-[-0.02em] mb-6">
                        Schedule Your <span className="text-gradient">Strategic Briefing</span>
                    </h1>
                    
                    <p className="text-base text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
                        Select a time for a confidential architecture session. We'll discuss your revenue goals, 
                        current AI landscape, and how IT Alliance can accelerate your growth.
                    </p>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/5 max-w-2xl mx-auto">
                        {[
                            { icon: Shield, label: "NDA-Protected" },
                            { icon: Clock, label: "48hr Response" },
                            { icon: Users, label: "Partner-Led" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2.5 text-[12px] font-bold text-slate-500 uppercase tracking-widest">
                                <item.icon className="w-4 h-4 text-electric/60" />
                                {item.label}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scheduler Section */}
            <section className="pb-32 relative z-10">
                <div className="container max-w-[1000px] mx-auto px-4 sm:px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative rounded-[2.5rem] bg-[#0A0F1C]/50 backdrop-blur-3xl overflow-hidden border border-white/10 shadow-2xl min-h-[700px]"
                    >
                        <InlineWidget 
                            url="https://calendly.com/lavanya-italliancetech/brifeing-session"
                            styles={{
                                height: "700px"
                            }}
                            pageSettings={{
                                backgroundColor: '0a0f1c',
                                hideEventTypeDetails: false,
                                hideLandingPageDetails: false,
                                primaryColor: '3b82f6',
                                textColor: 'ffffff'
                            }}
                        />
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
