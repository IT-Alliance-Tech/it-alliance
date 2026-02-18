"use client";

import { motion } from "framer-motion";
import Section, { FadeInView } from "./Section";

const logos = [
    "Enterprise Partner",
    "Cloud Infrastructure",
    "Data Platform",
    "AI Foundation",
    "Security Alliance",
    "DevOps Certified",
];

export default function Trust() {
    return (
        <Section id="trust" background="dark">
            <FadeInView>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-electric/60 mb-5 block">
                        Trusted By Industry Leaders
                    </span>
                    <h2 className="text-[32px] sm:text-[40px] font-bold text-white leading-[1.1] tracking-[-0.02em]">
                        Enterprise-Grade <span className="text-gradient">Trust</span>
                    </h2>
                </div>
            </FadeInView>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.06 } },
                }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
            >
                {logos.map((logo, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 20, scale: 0.95 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                    duration: 0.5,
                                    ease: [0.25, 0.1, 0.25, 1],
                                },
                            },
                        }}
                        whileHover={{ y: -3, scale: 1.03 }}
                        className="flex items-center justify-center h-[76px] glass rounded-2xl gradient-border group cursor-default hover:shadow-glow-sm transition-all duration-500"
                    >
                        <span className="text-[10px] font-semibold text-navy-300 group-hover:text-electric transition-colors duration-500 tracking-[0.1em] uppercase">
                            {logo}
                        </span>
                    </motion.div>
                ))}
            </motion.div>

            <FadeInView delay={0.3}>
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 glass-light rounded-full px-6 py-3">
                        <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                        <p className="text-[13px] text-navy-200">
                            SOC 2 Type II compliant · GDPR ready · Enterprise security standards
                        </p>
                    </div>
                </div>
            </FadeInView>
        </Section>
    );
}
