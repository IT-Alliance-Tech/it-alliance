"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Section, { SectionLabel, SectionTitle, SectionDescription } from "./Section";
import { Building2 } from "lucide-react";

const industries = [
    { name: "Real Estate & Property", icon: "🏠", color: "from-blue-500 to-indigo-500" },
    { name: "Healthcare & Clinics", icon: "🏥", color: "from-teal-500 to-emerald-500" },
    { name: "Education & Coaching", icon: "🎓", color: "from-violet-500 to-purple-500" },
    { name: "Professional Service Firms", icon: "📊", color: "from-amber-500 to-orange-500" },
    { name: "Scaling E-commerce Brands", icon: "🛍️", color: "from-rose-500 to-pink-500" },
];

// Triplicate for seamless infinite loop
const marqueeItems = [...industries, ...industries, ...industries];

function MarqueeTrack({ direction = "left", speed = 30 }) {
    const items = direction === "right" ? [...marqueeItems].reverse() : marqueeItems;

    return (
        <div className="flex overflow-hidden w-full">
            <motion.div
                className="flex gap-4 shrink-0"
                animate={{ x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"] }}
                transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
            >
                {items.map((industry, i) => (
                    <div
                        key={i}
                        className="group relative flex items-center gap-3 px-6 py-3.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] shrink-0 cursor-default hover:border-transparent transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md"
                    >
                        {/* Gradient border glow on hover */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                            <div className="absolute inset-[1px] rounded-full bg-white dark:bg-[#0d1117]" />
                        </div>

                        <span className="relative z-10 text-xl leading-none">{industry.icon}</span>
                        <span className="relative z-10 text-[14px] font-medium text-slate-700 dark:text-white/80 whitespace-nowrap">
                            {industry.name}
                        </span>

                        {/* Subtle bg tint on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-300`} />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default function Industries() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.15 });

    return (
        <Section id="industries" background="dark">
            <SectionLabel icon={Building2} text="Industries" />
            <SectionTitle>
                Designed for <span className="text-gradient">Growth-Focused</span> Industries
            </SectionTitle>
            <SectionDescription>
                We partner with structured businesses across sectors generating active inquiries and seeking measurable system optimisation.
            </SectionDescription>

            {/* Two marquee rows */}
            <div ref={ref} className="mt-16 flex flex-col gap-4 relative">

                {/* Left & right fade masks */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-[#080c14] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-[#080c14] to-transparent z-10 pointer-events-none" />

                {/* Row 1 — left */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <MarqueeTrack direction="left" speed={28} />
                </motion.div>

                {/* Row 2 — right */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <MarqueeTrack direction="right" speed={22} />
                </motion.div>
            </div>

            {/* Closing statement */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.45 }}
                className="mt-14 text-center space-y-3"
            >
                <p className="text-[15px] text-slate-500 dark:text-white/45 leading-[1.85] max-w-xl mx-auto">
                    Designed for companies generating active inquiries and seeking measurable system optimisation.
                </p>
                <p className="text-[15px] font-semibold text-slate-800 dark:text-white tracking-tight">
                    We partner with structured businesses.{" "}
                    <span className="text-gradient">Built for scale.</span>
                </p>
            </motion.div>
        </Section>
    );
}