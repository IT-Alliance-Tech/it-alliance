"use client";

import { motion } from "framer-motion";
import Section, { SectionLabel, SectionTitle, SectionDescription, StaggerContainer, StaggerItem } from "./Section";
import { Cpu } from "lucide-react";

const systems = [
    {
        title: "AI-Powered Lead Intelligence",
        desc: "Automatically score, prioritize, and route leads based on real-time behavioral signals and predictive models.",
    },
    {
        title: "Intelligent Pricing Engine",
        desc: "Dynamic pricing optimization that adapts to market conditions, competitor signals, and customer segments in real-time.",
    },
    {
        title: "Autonomous Sales Copilot",
        desc: "AI-driven sales assistants that handle research, outreach sequencing, and meeting preparation at enterprise scale.",
    },
    {
        title: "Predictive Churn Prevention",
        desc: "Identify at-risk accounts before they churn with early warning systems and automated retention workflows.",
    },
    {
        title: "Revenue Forecasting Intelligence",
        desc: "Move beyond spreadsheet forecasts with AI models that predict revenue with 95%+ accuracy across segments.",
    },
    {
        title: "Customer Journey Orchestration",
        desc: "AI-orchestrated customer experiences that personalize every touchpoint from awareness through advocacy.",
    },
];

export default function AIEnhanced() {
    return (
        <Section id="ai-enhanced" background="dark">
            <SectionLabel icon={Cpu} text="AI-Enhanced Systems" />
            <SectionTitle>
                Systems That <span className="text-gradient">Think. Execute. Optimize.</span>
            </SectionTitle>
            <SectionDescription>
                Every system we deploy is designed to operate autonomously while
                continuously learning from your enterprise data.
            </SectionDescription>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {systems.map((system, i) => (
                    <StaggerItem key={i}>
                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="glass rounded-2xl p-7 gradient-border h-full group hover:shadow-card-hover transition-all duration-500"
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric/15 to-violet/15 flex items-center justify-center mb-5 border border-white/5 group-hover:shadow-glow-sm transition-all duration-500">
                                <span className="text-[12px] font-bold text-gradient tracking-wide">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">
                                {system.title}
                            </h3>
                            <p className="text-[14px] text-navy-200 leading-[1.75]">
                                {system.desc}
                            </p>
                        </motion.div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </Section>
    );
}
