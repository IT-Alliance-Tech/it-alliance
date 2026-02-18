"use client";

import { motion } from "framer-motion";
import Section, { SectionLabel, SectionTitle, FadeInView } from "./Section";
import { AlertTriangle } from "lucide-react";

const stats = [
    { stat: "87%", desc: "of enterprise AI projects never reach production" },
    { stat: "$4.6T", desc: "projected AI economic value by 2030 — most will miss it" },
    { stat: "3–5x", desc: "ROI gap between AI-native and AI-experimenting enterprises" },
];

export default function ExecutiveProblem() {
    return (
        <Section id="problem" background="darker">
            <SectionLabel icon={AlertTriangle} text="The Executive Problem" />

            <SectionTitle>
                Most Enterprises Are Spending on AI.
                <br />
                <span className="text-gradient">Very Few Are Earning From It.</span>
            </SectionTitle>

            <FadeInView delay={0.2}>
                <div className="max-w-3xl">
                    <p className="text-[17px] text-navy-200 leading-[1.8] mb-5">
                        The AI market is saturated with tools, pilots, and proofs-of-concept
                        — yet 87% of enterprise AI projects fail to reach production. The
                        gap isn&apos;t technology. It&apos;s architecture.
                    </p>
                    <p className="text-[17px] text-navy-200 leading-[1.8] mb-14">
                        Without a revenue-aligned AI architecture, organizations accumulate
                        AI cost without capturing AI value. Departments run disconnected
                        experiments. Leadership sees dashboards, not decisions.
                    </p>
                </div>
            </FadeInView>

            <div className="grid sm:grid-cols-3 gap-5">
                {stats.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                        whileHover={{ y: -4, scale: 1.02 }}
                        className="glass rounded-2xl p-8 gradient-border group cursor-default"
                    >
                        <div className="text-[36px] font-bold text-gradient mb-3 tracking-tight">
                            {item.stat}
                        </div>
                        <p className="text-[14px] text-navy-200 leading-relaxed">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
