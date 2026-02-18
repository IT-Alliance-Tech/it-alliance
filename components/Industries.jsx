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

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {industries.map((industry, i) => (
                    <StaggerItem key={i}>
                        <motion.div
                            whileHover={{ y: -3, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="glass rounded-2xl px-6 py-6 gradient-border group cursor-default hover:shadow-glow-sm transition-all duration-500"
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                                    {industry.icon}
                                </span>
                                <span className="text-[14px] font-medium text-white/90">
                                    {industry.name}
                                </span>
                            </div>
                        </motion.div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </Section>
    );
}
