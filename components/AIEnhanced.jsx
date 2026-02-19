"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Section, { SectionLabel, SectionTitle, SectionDescription } from "./Section";
import { Cpu, UserCheck, Mail, BarChart2, GitMerge } from "lucide-react";

const features = [
    {
        id: "01",
        title: "Lead Qualification Logic",
        desc: "Automatically evaluate and rank incoming leads based on behaviour and fit. Ensuring your team focuses only on the highest-value opportunities.",
        icon: UserCheck,
        accent: "from-blue-500 to-indigo-600",
        iconColor: "text-blue-500 dark:text-blue-400",
        borderLight: "border-blue-100 dark:border-blue-500/20",
    },
    {
        id: "02",
        title: "Follow-Up Sequencing",
        desc: "Intelligent follow-up workflows triggered at the right moment in every prospect's journey. No lead falls through the cracks.",
        icon: Mail,
        accent: "from-violet-500 to-purple-600",
        iconColor: "text-violet-500 dark:text-violet-400",
        borderLight: "border-violet-100 dark:border-violet-500/20",
    },
    {
        id: "03",
        title: "Campaign Performance Monitoring",
        desc: "Real-time visibility into campaign health across every channel. Continuous optimisation driven by live performance signals.",
        icon: BarChart2,
        accent: "from-cyan-500 to-teal-600",
        iconColor: "text-cyan-500 dark:text-cyan-400",
        borderLight: "border-cyan-100 dark:border-cyan-500/20",
    },
    {
        id: "04",
        title: "Data-Driven Workflow Triggers",
        desc: "Actions are initiated automatically when key data thresholds are met. Keeping your revenue engine running without manual intervention.",
        icon: GitMerge,
        accent: "from-emerald-500 to-green-600",
        iconColor: "text-emerald-500 dark:text-emerald-400",
        borderLight: "border-emerald-100 dark:border-emerald-500/20",
    },
];

export default function AIEnhanced() {
    const bottomRef = useRef(null);
    const bottomInView = useInView(bottomRef, { once: true, margin: "-60px" });

    return (
        <Section id="ai-enhanced" background="dark">
            <SectionLabel icon={Cpu} text="AI-Enhanced Systems" />

            <SectionTitle>
                Intelligent Workflow <span className="text-gradient">Integration</span>
            </SectionTitle>

            <SectionDescription>
                Our systems are enhanced with intelligent automation layers that support your entire revenue operation.
            </SectionDescription>

            {/* 4-column grid */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative items-stretch">

                {/* Connector line — desktop only */}
                <div className="absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-white/10 dark:via-white/20 dark:to-white/10 hidden lg:block" />

                {features.map((item, i) => {
                    const Icon = item.icon;
                    const ref = useRef(null);
                    const inView = useInView(ref, { once: true, margin: "-40px" });
                    const [hovered, setHovered] = useState(false);

                    return (
                        <div key={item.id} ref={ref} className="flex flex-col items-center h-full">

                            {/* Icon dot */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={inView ? { scale: 1, opacity: 1 } : {}}
                                transition={{ duration: 0.4, delay: i * 0.15, ease: "backOut" }}
                                className="relative z-10 mb-6"
                            >
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.accent} p-[2px] shadow-lg`}>
                                    <div className="w-full h-full rounded-full bg-white dark:bg-[#0d1117] flex items-center justify-center">
                                        <Icon className={`w-5 h-5 ${item.iconColor}`} />
                                    </div>
                                </div>
                                <motion.div
                                    animate={hovered ? { scale: [1, 1.8], opacity: [0.3, 0] } : { scale: 1, opacity: 0 }}
                                    transition={{ duration: 0.8, repeat: hovered ? Infinity : 0 }}
                                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.accent}`}
                                />
                            </motion.div>

                            {/* Box card */}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.15 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                                className={`relative w-full h-full rounded-2xl border ${item.borderLight} bg-white dark:bg-white/[0.03] p-6 hover:border-transparent transition-all duration-500 hover:shadow-xl overflow-hidden flex flex-col`}
                            >
                                {/* Gradient border on hover */}
                                <motion.div
                                    animate={{ opacity: hovered ? 1 : 0 }}
                                    transition={{ duration: 0.4 }}
                                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.accent} p-px`}
                                >
                                    <div className="absolute inset-[1px] rounded-[15px] bg-white dark:bg-[#0d1117]" />
                                </motion.div>

                                <div className="relative z-10">
                                    <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-white/25 uppercase block mb-2">
                                        Layer {item.id}
                                    </span>

                                    <h3 className="text-[15px] font-semibold text-slate-900 dark:text-white leading-snug tracking-tight mb-3">
                                        {item.title}
                                    </h3>

                                    {/* Animated underline */}
                                    <motion.div
                                        animate={{ width: hovered ? "100%" : "28px" }}
                                        transition={{ duration: 0.4 }}
                                        className={`h-[2px] rounded-full bg-gradient-to-r ${item.accent} mb-4`}
                                    />

                                    <p className="text-[13px] text-slate-500 dark:text-white/40 leading-[1.75]">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Bg glow */}
                                <motion.div
                                    animate={{ opacity: hovered ? 0.05 : 0 }}
                                    transition={{ duration: 0.5 }}
                                    className={`absolute inset-0 bg-gradient-to-br ${item.accent}`}
                                />
                            </motion.div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom statement */}
            <motion.div
                ref={bottomRef}
                initial={{ opacity: 0, y: 16 }}
                animate={bottomInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mt-20 text-center space-y-3"
            >
                <p className="text-[15px] text-slate-500 dark:text-navy-200 leading-[1.85] max-w-xl mx-auto">
                    Artificial intelligence is embedded within the architecture — enhancing efficiency without disrupting operational stability.
                </p>
                <p className="text-[15px] font-semibold text-slate-800 dark:text-white tracking-tight">
                    AI supports the system.{" "}
                    <span className="text-gradient">The system drives growth.</span>
                </p>
            </motion.div>
        </Section>
    );
}