"use client";

import { motion } from "framer-motion";
import Section, { SectionLabel, SectionTitle, SectionDescription } from "./Section";
import { Layers } from "lucide-react";

const steps = [
    {
        phase: "01",
        title: "Revenue Signal Mapping",
        desc: "We map your entire revenue lifecycle — from lead generation through retention — identifying where AI can create measurable leverage.",
         color: "from-electric to-blue-400",
    },
    {
        phase: "02",
        title: "Architecture Design",
        desc: "We design a modular AI architecture that integrates with your existing stack while creating new intelligence layers across sales, marketing, operations, and product.",
        color: "from-violet to-purple-400",
    },
    {
        phase: "03",
        title: "Intelligent Automation Deployment",
        desc: "We deploy AI-powered automation across your revenue-critical functions — not as standalone tools, but as interconnected systems that learn and optimize continuously.",
        color: "from-cyan to-teal-400",
    },
    {
        phase: "04",
        title: "Revenue Intelligence Layer",
        desc: "We build an AI-native intelligence layer that provides real-time decision support, predictive analytics, and autonomous optimization across your entire revenue operation.",
        color: "from-emerald to-green-400",
    },
];

export default function RevenueArchitecture() {
    return (
        <Section id="architecture" background="dark">
            <SectionLabel icon={Layers} text="Revenue Architecture Model" />
            <SectionTitle>A System. Not a Service.</SectionTitle>
            <SectionDescription>
                Our Revenue Architecture Model is a four-layer AI integration
                framework designed for enterprise-grade transformation.
            </SectionDescription>

            <div className="relative">
                <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute left-8 md:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-electric/30 via-violet/30 to-cyan/30 origin-top hidden sm:block"
                />

                <div className="flex flex-col gap-8 sm:gap-10">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{
                                duration: 0.7,
                                delay: i * 0.12,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                            className="relative sm:pl-28 group"
                        >
                            <div className="hidden sm:flex absolute left-0 top-8 w-16 md:w-20 h-16 md:h-20 rounded-2xl bg-white/80 dark:bg-white/[0.02] border border-slate-150 dark:border-white/[0.04] items-center justify-center backdrop-blur-sm transition-all duration-500">
                                <span className={`text-sm font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                                    {step.phase}
                                </span>
                            </div>

                            <motion.div
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.3 }}
                                className="rounded-2xl p-7 md:p-9 border border-slate-150 dark:border-white/[0.04] bg-white/50 dark:bg-white/[0.02] hover:shadow-md dark:hover:shadow-none transition-all duration-500"
                            >
                                <span className="text-[11px] font-semibold text-electric/40 uppercase tracking-[0.12em] sm:hidden mb-2 block">
                                    Phase {step.phase}
                                </span>
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="text-[15px] text-slate-500 dark:text-navy-200 leading-[1.75]">
                                    {step.desc}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
