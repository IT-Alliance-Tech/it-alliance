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
    const [windowWidth, setWindowWidth] = useState(0);

    // Initial width on mount and resize listener
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowWidth > 0 && windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 1024;
    const cardSpacing = isMobile ? windowWidth * 0.85 : isTablet ? 280 : 310;

    const prev = () => setActive((a) => (a - 1 + phases.length) % phases.length);
    const next = () => setActive((a) => (a + 1) % phases.length);

    // Auto-scroll every 3 seconds, pauses on hover
    useEffect(() => {
        if (paused) return;
        const interval = setInterval(() => {
            setActive((a) => (a + 1) % phases.length);
        }, 4000);
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
                    className="hidden md:flex relative z-20 w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm items-center justify-center text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-white/30 hover:shadow-md transition-all duration-300 shrink-0"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Cards stage */}
                <div
                    className="relative flex items-center justify-center w-full max-w-5xl overflow-hidden px-4"
                    style={{ height: isMobile ? "460px" : "420px" }}
                    onMouseEnter={() => !isMobile && setPaused(true)}
                    onMouseLeave={() => !isMobile && setPaused(false)}
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
                                drag={isMobile ? "x" : false}
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipeThreshold = 50;
                                    if (offset.x > swipeThreshold) prev();
                                    else if (offset.x < -swipeThreshold) next();
                                }}
                                animate={{
                                    x: offset * cardSpacing,
                                    scale: isActive ? 1 : isMobile ? 0.95 : 0.88,
                                    opacity: isMobile
                                        ? (isActive ? 1 : 0)
                                        : (isHidden ? 0 : isActive ? 1 : 0.1),
                                    zIndex: isActive ? 20 : 10,
                                    filter: isActive ? "blur(0px)" : isMobile ? "blur(0px)" : "blur(1.5px)",
                                }}
                                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                                className={`absolute w-full ${isMobile ? "max-w-[calc(100vw-48px)]" : "max-w-md"} cursor-pointer select-none`}
                                style={{
                                    pointerEvents: isHidden && !isMobile ? "none" : "auto",
                                    touchAction: "pan-y"
                                }}
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
                                        ? `${phase.borderColor} bg-white dark:bg-white/[0.22] shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-none`
                                        : "border-slate-200 dark:border-white/[0.05] bg-slate-50/80 dark:bg-white/[0.08] shadow-sm dark:shadow-none"
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
                                                    <span className="text-slate-600 dark:text-white/70">{item}</span>
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
                    className="hidden md:flex relative z-20 w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm items-center justify-center text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-white/30 hover:shadow-md transition-all duration-300 shrink-0"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Mobile Navigation Arrows (Bottom Row) */}
            <div className="md:hidden flex items-center justify-center gap-6 mt-6">
                <button
                    onClick={prev}
                    className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white shadow-lg active:scale-90 transition-transform"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={next}
                    className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white shadow-lg active:scale-90 transition-transform"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-3 mt-10">
                {phases.map((phase, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className="relative h-2 md:h-1.5 rounded-full transition-all duration-300 overflow-hidden"
                        style={{ width: active === i ? (isMobile ? "40px" : "32px") : "8px" }}
                    >
                        <div className={`absolute inset-0 rounded-full ${active === i ? `bg-gradient-to-r ${phase.color}` : "bg-slate-300 dark:bg-white/20"} transition-all duration-300`} />
                    </button>
                ))}
            </div>
        </Section>
    );
}