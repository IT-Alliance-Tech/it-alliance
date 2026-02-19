"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe2, Fingerprint, ServerCrash, GitBranch, Lock, BadgeCheck, Rocket, HeartHandshake } from "lucide-react";

const partners = [
    { name: "Enterprise Partner", icon: ShieldCheck, color: "#f97316" },
    { name: "Cloud Infrastructure", icon: Globe2, color: "#22d3ee" },
    { name: "Data Platform", icon: ServerCrash, color: "#a3e635" },
    { name: "AI Foundation", icon: Zap, color: "#f43f5e" },
    { name: "Security Alliance", icon: Fingerprint, color: "#c084fc" },
    { name: "DevOps Certified", icon: GitBranch, color: "#34d399" },
];

const stats = [
    { icon: BadgeCheck, label: "Verified & Certified", desc: "Industry-recognized standards" },
    { icon: Lock, label: "Zero Trust Security", desc: "End-to-end encrypted" },
    { icon: Rocket, label: "Instant Scalability", desc: "Grows with your team" },
    { icon: HeartHandshake, label: "Dedicated Support", desc: "24/7 enterprise SLA" },
];

const marqueeItems = [...partners, ...partners];

export default function Trust() {
    return (
        <section
            id="trust"
            className="relative py-32 overflow-hidden"
            style={{
                background: "linear-gradient(160deg, #0f0a1e 0%, #0a0f1e 50%, #0d0a1a 100%)",
                fontFamily: "'DM Sans', sans-serif",
            }}
        >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,500;0,9..40,700;0,9..40,900&family=DM+Mono:wght@400;500&display=swap');

                @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .marquee-track {
                    animation: marquee 22s linear infinite;
                    display: flex;
                    width: max-content;
                }
                .marquee-track:hover {
                    animation-play-state: paused;
                }
            `}</style>

            {/* Noise texture */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundSize: "128px",
                }}
            />

            {/* Decorative rings */}
            <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full border border-white/[0.03] pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full border border-white/[0.04] pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-6">

                {/* Header row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20"
                >
                    <div>
                        <p
                            className="text-[11px] uppercase tracking-[0.3em] mb-4"
                            style={{ color: "rgba(167,139,250,0.6)", fontFamily: "'DM Mono', monospace" }}
                        >
                            // trusted infrastructure
                        </p>
                        <h2 className="text-[48px] sm:text-[64px] font-black text-white leading-[0.95] tracking-[-0.04em]">
                            Built for
                            <br />
                            <em
                                className="not-italic"
                                style={{
                                    background: "linear-gradient(90deg, #a78bfa 0%, #f472b6 60%, #fb923c 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                enterprise.
                            </em>
                        </h2>
                    </div>

                    {/* Stat pills — icon-based, no numbers */}
                    <div className="grid grid-cols-2 gap-3">
                        {stats.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08, duration: 0.4 }}
                                    className="rounded-2xl px-5 py-4 border border-white/[0.06] bg-white/[0.03] flex items-start gap-3"
                                >
                                    <div className="mt-0.5 w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-400/15 flex items-center justify-center flex-shrink-0">
                                        <Icon size={15} strokeWidth={1.8} style={{ color: "#a78bfa" }} />
                                    </div>
                                    <div>
                                        <p className="text-[13px] font-bold text-white leading-snug">
                                            {s.label}
                                        </p>
                                        <p
                                            className="text-[11px] mt-0.5"
                                            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Mono', monospace" }}
                                        >
                                            {s.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Divider */}
                <div
                    className="w-full h-px mb-16"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }}
                />

                {/* Marquee */}
                <div className="overflow-hidden -mx-6 mb-20">
                    <div className="marquee-track">
                        {marqueeItems.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 mx-4 px-7 py-4 rounded-2xl border border-white/[0.06] bg-white/[0.025] cursor-default flex-shrink-0"
                                    style={{ minWidth: "210px" }}
                                >
                                    <div
                                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: `${item.color}18`,
                                            border: `1px solid ${item.color}30`,
                                        }}
                                    >
                                        <Icon size={16} strokeWidth={1.8} style={{ color: item.color }} />
                                    </div>
                                    <span className="text-[13px] font-semibold text-white/60 whitespace-nowrap">
                                        {item.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Compliance bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-between rounded-3xl border border-white/[0.06] overflow-hidden"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(139,92,246,0.06) 0%, rgba(244,114,182,0.04) 100%)",
                    }}
                >
                    <div className="flex items-center gap-5 px-8 py-6 w-full sm:w-auto border-b sm:border-b-0 sm:border-r border-white/[0.05]">
                        <div className="relative w-10 h-10">
                            <div className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping" />
                            <div className="relative w-10 h-10 rounded-full bg-emerald-400/10 flex items-center justify-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                            </div>
                        </div>
                        <div>
                            <p className="text-[13px] font-bold text-white">All systems operational</p>
                            <p className="text-[11px] text-white/30 mt-0.5">Last checked 42s ago</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-8 gap-y-3 px-8 py-6">
                        {["SOC 2 Type II", "GDPR Ready", "ISO 27001", "HIPAA Compliant"].map((cert, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <ShieldCheck size={12} strokeWidth={2.5} style={{ color: "rgba(167,139,250,0.6)" }} />
                                <span
                                    className="text-[11px] font-semibold text-white/40 uppercase tracking-[0.1em]"
                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                >
                                    {cert}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}