"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Section, { SectionLabel, SectionTitle, FadeInView } from "./Section";
import { AlertTriangle } from "lucide-react";

const stats = [
    {
        value: 87,
        suffix: "%",
        desc: "of enterprise AI projects never reach production",
        isAnimated: true
    },
    {
        stat: "$4.6T",
        desc: "projected AI economic value by 2030 — most will miss it"
    },
    {
        stat: "3–5x",
        desc: "ROI gap between AI-native and AI-experimenting enterprises"
    },
];

function AnimatedCounter({ value, duration = 2 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.3 });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            setDisplayValue(Math.round(latest));
        });
    }, [springValue]);

    return <span ref={ref}>{displayValue}</span>;
}

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
                    <p className="text-[17px] text-slate-500 dark:text-navy-200 leading-[1.8] mb-5">
                        The AI market is saturated with tools, pilots, and proofs-of-concept
                        — yet 87% of enterprise AI projects fail to reach production. The
                        gap isn&apos;t technology. It&apos;s architecture.
                    </p>
                    <p className="text-[17px] text-slate-500 dark:text-navy-200 leading-[1.8] mb-14">
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
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                        whileHover={{ y: -4 }}
                        className="rounded-2xl p-8 border border-slate-150 dark:border-white/[0.04] bg-white/50 dark:bg-white/[0.02] group cursor-default"
                    >
                        <div className="text-[36px] font-bold text-gradient mb-3 tracking-tight flex items-baseline">
                            {item.isAnimated ? (
                                <>
                                    <AnimatedCounter value={item.value} />
                                    <span>{item.suffix}</span>
                                </>
                            ) : (
                                item.stat
                            )}
                        </div>
                        <p className="text-[14px] text-slate-500 dark:text-navy-200 leading-relaxed">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
