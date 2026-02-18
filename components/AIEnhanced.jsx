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

            <StaggerContainer className="space-y-0">
                {systems.map((system, i) => (
                    <StaggerItem key={i}>
                        <motion.div
                            whileHover={{ x: 6 }}
                            transition={{ duration: 0.3 }}
                            className="group py-8 flex items-start gap-6 border-b border-slate-100 dark:border-white/[0.04] last:border-0"
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric/10 to-violet/10 dark:from-electric/15 dark:to-violet/15 flex items-center justify-center shrink-0 mt-0.5">
                                <span className="text-[12px] font-bold text-gradient tracking-wide">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-electric transition-colors duration-300">
                                    {system.title}
                                </h3>
                                <p className="text-[15px] text-slate-500 dark:text-navy-200 leading-[1.75] max-w-xl">
                                    {system.desc}
                                </p>
                            </div>
                        </motion.div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </Section>
    );
}
