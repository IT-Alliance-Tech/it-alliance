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
        gradient: "from-electric/20 to-blue-400/20",
        iconColor: "text-electric",
    },
    {
        icon: BarChart3,
        title: "Revenue Intelligence Engineering",
        desc: "Predictive pipeline models, AI-optimized pricing, intelligent lead scoring, and conversion architecture — built to self-optimize.",
        gradient: "from-violet/20 to-purple-400/20",
        iconColor: "text-violet",
    },
    {
        icon: Zap,
        title: "Autonomous Process Architecture",
        desc: "Workflow automation that doesn't just execute — it learns, adapts, and improves. From onboarding to fulfillment.",
        gradient: "from-amber-500/20 to-orange-400/20",
        iconColor: "text-amber-400",
    },
    {
        icon: Shield,
        title: "Enterprise Data Architecture",
        desc: "Your AI is only as strong as your data. We architect unified, governed, and AI-ready data infrastructure.",
        gradient: "from-emerald/20 to-green-400/20",
        iconColor: "text-emerald",
    },
    {
        icon: Target,
        title: "Precision Customer Intelligence",
        desc: "Hyper-personalized customer journeys powered by real-time AI — from first touch through lifetime retention.",
        gradient: "from-cyan/20 to-teal-400/20",
        iconColor: "text-cyan",
    },
    {
        icon: Workflow,
        title: "Scalable AI Operations",
        desc: "Production-grade MLOps, model governance, and continuous learning systems — built for enterprise compliance and scale.",
        gradient: "from-rose-500/20 to-pink-400/20",
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

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {pillars.map((pillar, i) => {
                    const Icon = pillar.icon;
                    return (
                        <StaggerItem key={i}>
                            <motion.div
                                whileHover={{ y: -6, scale: 1.01 }}
                                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                                className="glass rounded-2xl p-7 gradient-border h-full group hover:shadow-card-hover transition-all duration-500"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-500`}>
                                    <Icon className={`w-5 h-5 ${pillar.iconColor}`} />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">
                                    {pillar.title}
                                </h3>
                                <p className="text-[14px] text-navy-200 leading-[1.75]">
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
