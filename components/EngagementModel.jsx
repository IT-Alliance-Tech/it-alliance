"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Section, { SectionLabel, SectionTitle, SectionDescription } from "./Section";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";

const phases = [
    {
        phase: "Phase 1",
        timeline: "Months 1–2",
        title: "Discovery & Architecture",
        color: "from-blue-500 to-indigo-500",
        borderColor: "border-blue-300 dark:border-blue-400/30",
        tagColor: "text-blue-600 dark:text-blue-400",
        tagBg: "bg-blue-50 dark:bg-transparent",
        glowColor: "rgba(99,102,241,0.12)",
        items: [
            "Full revenue system audit",
            "AI opportunity mapping",
            "Architecture blueprint design",
            "Data readiness assessment",
            "Success metrics definition",
        ],
    },
    {
        phase: "Phase 2",
        timeline: "Months 3–4",
        title: "Build & Integration",
        color: "from-violet-500 to-purple-500",
        borderColor: "border-violet-300 dark:border-violet-400/30",
        tagColor: "text-violet-600 dark:text-violet-400",
        tagBg: "bg-violet-50 dark:bg-transparent",
        glowColor: "rgba(139,92,246,0.12)",
        items: [
            "Core AI model development",
            "System integration engineering",
            "Automation deployment",
            "Team enablement & training",
            "Initial performance benchmarks",
        ],
    },
    {
        phase: "Phase 3",
        timeline: "Months 5–6",
        title: "Optimization & Scale",
        color: "from-cyan-500 to-teal-500",
        borderColor: "border-cyan-300 dark:border-cyan-400/30",
        tagColor: "text-cyan-600 dark:text-cyan-400",
        tagBg: "bg-cyan-50 dark:bg-transparent",
        glowColor: "rgba(6,182,212,0.12)",
        items: [
            "Performance optimization",
            "Advanced model refinement",
            "Scale-ready architecture validation",
            "Knowledge transfer completion",
            "Continuous improvement roadmap",
        ],
    },
];

export default function EngagementModel() {
    const [active, setActive] = useState(1);
    const [paused, setPaused] = useState(false);

    const prev = () => setActive((a) => (a - 1 + phases.length) % phases.length);
    const next = () => setActive((a) => (a + 1) % phases.length);

    // Auto-scroll every 3 seconds, pauses on hover
    useEffect(() => {
        if (paused) return;
        const interval = setInterval(() => {
            setActive((a) => (a + 1) % phases.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [paused]);

    return (
        <Section id="engagement" background="darker">
            <SectionLabel icon={Clock} text="Engagement Model" />
            <SectionTitle>
                6-Month Transformation{" "}
                <span className="text-gradient">Engagement</span>
            </SectionTitle>
            <SectionDescription>
                A structured, outcome-driven engagement designed to take you from
                AI-curious to AI-native in six months.
            </SectionDescription>

            {/* Spotlight stage */}
            <div className="mt-14 relative flex items-center justify-center gap-4 min-h-[420px]">

                {/* Prev arrow */}
                <button
                    onClick={prev}
                    className="relative z-20 w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm flex items-center justify-center text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-white/30 hover:shadow-md transition-all duration-300 shrink-0"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Cards stage */}
                <div
                    className="relative flex items-center justify-center w-full max-w-4xl overflow-hidden"
                    style={{ height: "380px" }}
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    {phases.map((phase, i) => {
                        const rawOffset = i - active;
                        const offset = rawOffset > 1 ? rawOffset - phases.length : rawOffset < -1 ? rawOffset + phases.length : rawOffset;
                        const isActive = offset === 0;
                        const isHidden = Math.abs(offset) > 1;

                        return (
                            <motion.div
                                key={i}
                                onClick={() => !isActive && setActive(i)}
                                animate={{
                                    x: offset * 310,
                                    scale: isActive ? 1 : 0.84,
                                    opacity: isHidden ? 0 : isActive ? 1 : 0.4,
                                    zIndex: isActive ? 10 : 5,
                                    filter: isActive ? "blur(0px)" : "blur(2px)",
                                }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute w-full max-w-md cursor-pointer"
                                style={{ pointerEvents: isHidden ? "none" : "auto" }}
                            >
                                {/* Glow — light mode uses colored shadow, dark uses blur */}
                                {isActive && (
                                    <div
                                        className="absolute -inset-4 rounded-3xl blur-2xl pointer-events-none opacity-40 dark:opacity-100"
                                        style={{ background: phase.glowColor }}
                                    />
                                )}

                                <div className={`relative rounded-2xl border-2 overflow-hidden transition-all duration-500
                                    ${isActive
                                        ? `${phase.borderColor} bg-white dark:bg-white/[0.05] shadow-xl dark:shadow-none`
                                        : "border-slate-200 dark:border-white/[0.05] bg-slate-50/80 dark:bg-white/[0.02] shadow-md dark:shadow-none"
                                    }`}
                                >
                                    {/* Top gradient bar */}
                                    <motion.div
                                        animate={{ scaleX: isActive ? 1 : 0.3, opacity: isActive ? 1 : 0.4 }}
                                        transition={{ duration: 0.5 }}
                                        style={{ originX: 0 }}
                                        className={`h-1 bg-gradient-to-r ${phase.color}`}
                                    />

                                    <div className="p-8">
                                        {/* Header */}
                                        <div className="flex items-center justify-between mb-5">
                                            <span className={`text-[11px] font-bold uppercase tracking-[0.15em] bg-gradient-to-r ${phase.color} bg-clip-text text-transparent`}>
                                                {phase.phase}
                                            </span>
                                            <span className={`text-[11px] font-medium ${phase.tagColor} ${phase.tagBg} border ${phase.borderColor} rounded-full px-2.5 py-0.5`}>
                                                {phase.timeline}
                                            </span>
                                        </div>

                                        <h3 className="text-[22px] font-bold text-slate-900 dark:text-white tracking-tight mb-6">
                                            {phase.title}
                                        </h3>

                                        {/* Items */}
                                        <ul className="space-y-3">
                                            {phase.items.map((item, j) => (
                                                <motion.li
                                                    key={j}
                                                    animate={{ opacity: isActive ? 1 : 0.5, x: 0 }}
                                                    transition={{ duration: 0.35, delay: isActive ? j * 0.07 : 0 }}
                                                    className="flex items-start gap-3 text-[14px]"
                                                >
                                                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${phase.color} mt-[5px] shrink-0`} />
                                                    <span className="text-slate-600 dark:text-white/50">{item}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Next arrow */}
                <button
                    onClick={next}
                    className="relative z-20 w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm flex items-center justify-center text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-white/30 hover:shadow-md transition-all duration-300 shrink-0"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2.5 mt-8">
                {phases.map((phase, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className="relative h-1.5 rounded-full transition-all duration-300 overflow-hidden"
                        style={{ width: active === i ? "32px" : "8px" }}
                    >
                        <div className={`absolute inset-0 rounded-full ${active === i ? `bg-gradient-to-r ${phase.color}` : "bg-slate-300 dark:bg-white/20"} transition-all duration-300`} />
                    </button>
                ))}
            </div>
        </Section>
    );
}