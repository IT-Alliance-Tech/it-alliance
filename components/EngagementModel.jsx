"use client";

import { motion } from "framer-motion";
import Section, { SectionLabel, SectionTitle, SectionDescription, FadeInView } from "./Section";
import { Clock } from "lucide-react";

const phases = [
    {
        phase: "Phase 1",
        timeline: "Months 1–2",
        title: "Discovery & Architecture",
        color: "from-electric to-blue-400",
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
        color: "from-violet to-purple-400",
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
        color: "from-cyan to-teal-400",
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

            <div className="grid md:grid-cols-3 gap-6">
                {phases.map((phase, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            delay: i * 0.15,
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                        whileHover={{ y: -5 }}
                        className="relative group"
                    >
                        {/* Gradient top bar */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: 0.3 + i * 0.2,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                            className={`h-1 bg-gradient-to-r ${phase.color} rounded-t-2xl origin-left mb-0`}
                        />
                        <div className="glass rounded-b-2xl rounded-tr-2xl p-7 md:p-9 border-t-0 transition-all duration-500 h-full">
                            <div className="flex items-center justify-between mb-6">
                                <span className={`text-[11px] font-bold uppercase tracking-[0.15em] bg-gradient-to-r ${phase.color} bg-clip-text text-transparent`}>
                                    {phase.phase}
                                </span>
                                <span className="text-[11px] text-slate-400 dark:text-navy-300 font-medium tracking-wide">
                                    {phase.timeline}
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 tracking-tight">
                                {phase.title}
                            </h3>
                            <ul className="space-y-3.5">
                                {phase.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-3 text-[14px]">
                                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${phase.color} mt-1.5 shrink-0`} />
                                        <span className="text-slate-500 dark:text-navy-200">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
