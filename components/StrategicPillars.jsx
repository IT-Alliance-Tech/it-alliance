"use client";

import { motion } from "framer-motion";
import Section, { SectionLabel, SectionTitle, SectionDescription, StaggerContainer, StaggerItem } from "./Section";
import {
    Brain,
    BarChart3,
    Zap,
    Shield,
    Target,
    Workflow,
} from "lucide-react";

const pillars = [
    {
        icon: Brain,
        title: "AI-First Strategy Design",
        desc: "We don't retrofit AI into old processes. We redesign your operational model with AI as the foundational intelligence layer.",
        iconColor: "text-electric",
    },
    {
        icon: BarChart3,
        title: "Revenue Intelligence Engineering",
        desc: "Predictive pipeline models, AI-optimized pricing, intelligent lead scoring, and conversion architecture — built to self-optimize.",
        iconColor: "text-violet",
    },
    {
        icon: Zap,
        title: "Autonomous Process Architecture",
        desc: "Workflow automation that doesn't just execute — it learns, adapts, and improves. From onboarding to fulfillment.",
        iconColor: "text-amber-400",
    },
    {
        icon: Shield,
        title: "Enterprise Data Architecture",
        desc: "Your AI is only as strong as your data. We architect unified, governed, and AI-ready data infrastructure.",
        iconColor: "text-emerald",
    },
    {
        icon: Target,
        title: "Precision Customer Intelligence",
        desc: "Hyper-personalized customer journeys powered by real-time AI — from first touch through lifetime retention.",
        iconColor: "text-cyan",
    },
    {
        icon: Workflow,
        title: "Scalable AI Operations",
        desc: "Production-grade MLOps, model governance, and continuous learning systems — built for enterprise compliance and scale.",
        iconColor: "text-rose-400",
    },
];

export default function StrategicPillars() {
    return (
        <Section id="pillars" background="darker">
            <SectionLabel icon={Target} text="Strategic Pillars" />
            <SectionTitle>
                Six Pillars of Enterprise{" "}
                <span className="text-gradient">AI Transformation</span>
            </SectionTitle>
            <SectionDescription>
                Each pillar is a complete capability layer — engineered to work
                independently or as part of a unified AI-native enterprise system.
            </SectionDescription>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-0">
                {pillars.map((pillar, i) => {
                    const Icon = pillar.icon;
                    return (
                        <StaggerItem key={i}>
                            <motion.div
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.3 }}
                                className="group py-8 border-b border-slate-100 dark:border-white/[0.04]"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/[0.04] flex items-center justify-center">
                                        <Icon className={`w-5 h-5 ${pillar.iconColor}`} />
                                    </div>
                                    <h3 className="text-[16px] font-semibold text-slate-900 dark:text-white tracking-tight">
                                        {pillar.title}
                                    </h3>
                                </div>
                                <p className="text-[14px] text-slate-500 dark:text-navy-200 leading-[1.75] pl-14">
                                    {pillar.desc}
                                </p>
                            </motion.div>
                        </StaggerItem>
                    );
                })}
            </StaggerContainer>
        </Section>
    );
}
