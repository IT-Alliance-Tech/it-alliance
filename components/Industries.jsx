"use client";

import { motion } from "framer-motion";
import Section, { SectionLabel, SectionTitle, SectionDescription, StaggerContainer, StaggerItem } from "./Section";
import { Building2 } from "lucide-react";

const industries = [
    { name: "Financial Services & Banking", icon: "🏦" },
    { name: "Healthcare & Life Sciences", icon: "🏥" },
    { name: "Technology & SaaS", icon: "💻" },
    { name: "Manufacturing & Supply Chain", icon: "🏭" },
    { name: "Retail & E-Commerce", icon: "🛍️" },
    { name: "Professional Services", icon: "📊" },
    { name: "Energy & Utilities", icon: "⚡" },
    { name: "Telecommunications", icon: "📡" },
];

export default function Industries() {
    return (
        <Section id="industries" background="dark">
            <SectionLabel icon={Building2} text="Industries" />
            <SectionTitle>
                Built for Enterprise{" "}
                <span className="text-gradient">Complexity</span>
            </SectionTitle>
            <SectionDescription>
                Our frameworks are designed for industries where precision, compliance,
                and scale are non-negotiable.
            </SectionDescription>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4">
                {industries.map((industry, i) => (
                    <StaggerItem key={i}>
                        <motion.div
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.3 }}
                            className="group flex items-center gap-4 px-5 py-5 border-b border-r border-slate-100 dark:border-white/[0.04] cursor-default"
                        >
                            <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                                {industry.icon}
                            </span>
                            <span className="text-[14px] font-medium text-slate-700 dark:text-white/90 group-hover:text-electric transition-colors duration-300">
                                {industry.name}
                            </span>
                        </motion.div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </Section>
    );
}
