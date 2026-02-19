"use client";

import { motion } from "framer-motion";
import Section, { SectionLabel, SectionTitle, SectionDescription, StaggerContainer, StaggerItem } from "./Section";
import { CheckCircle2 } from "lucide-react";

const differentiators = [
    {
        title: "Architecture-First",
        desc: "We design before we deploy. Every AI system is built on a strategic architecture aligned to your revenue model.",
        icon: "🏗️",
    },
    {
        title: "Revenue-Aligned",
        desc: "Every engagement is measured by business outcomes — not model accuracy scores. Revenue impact is the only metric.",
        icon: "📈",
    },
    {
        title: "Enterprise-Native",
        desc: "Built for compliance, governance, and scale from day one. No startup experiments retrofitted for enterprise.",
        icon: "🏢",
    },
    {
        title: "Full-Stack AI",
        desc: "From strategy through deployment through optimization. One partner. One architecture. One accountable team.",
        icon: "⚙️",
    },
    {
        title: "Continuous Learning",
        desc: "Our systems don't just automate — they learn. Every data point makes your AI infrastructure smarter.",
        icon: "🧠",
    },
    {
        title: "Knowledge Transfer",
        desc: "We build your team's AI capabilities alongside the systems. You own the intelligence we create.",
        icon: "🎓",
    },
];

export default function WhyUs() {
    return (
        <Section id="why-us" background="darker">
            <SectionLabel icon={CheckCircle2} text="Why IT Alliance AI" />
            <SectionTitle>
                The Difference Is{" "}
                <span className="text-gradient">Architecture</span>
            </SectionTitle>
            <SectionDescription>
                We are not an AI vendor. We are an AI architecture firm — dedicated to
                building intelligent revenue systems that deliver compound returns.
            </SectionDescription>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {differentiators.map((diff, i) => (
                    <StaggerItem key={i}>
                        <motion.div
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.3 }}
                            className="glass rounded-2xl p-7 h-full group transition-all duration-500"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                                    {diff.icon}
                                </span>
                                <h3 className="text-[15px] font-semibold text-slate-900 dark:text-white tracking-tight">
                                    {diff.title}
                                </h3>
                            </div>
                            <p className="text-[14px] text-slate-500 dark:text-navy-200 leading-[1.75]">
                                {diff.desc}
                            </p>
                        </motion.div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </Section>
    );
}
