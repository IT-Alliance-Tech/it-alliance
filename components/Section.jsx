"use client";

import { motion } from "framer-motion";

export default function Section({
    children,
    id,
    className = "",
    background = "dark",
}) {
    const bgClass =
        background === "darker"
            ? "bg-slate-100 dark:bg-navy-950"
            : background === "gradient"
                ? "bg-gradient-to-br from-slate-50 to-blue-50 dark:bg-hero-gradient"
                : "bg-white dark:bg-navy-800";

    return (
        <section
            id={id}
            className={`relative py-10 md:py-16 lg:py-20 ${bgClass} overflow-hidden ${className}`}
        >
            <div className="absolute inset-0 bg-noise pointer-events-none opacity-20 dark:opacity-50" />
            <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
                {children}
            </div>
        </section>
    );
}

export function SectionLabel({ icon: Icon, text }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
        >
            <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center border border-electric/10">
                <Icon className="w-5 h-5 text-electric" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-electric/70">
                {text}
            </span>
        </motion.div>
    );
}

export function SectionTitle({ children, className = "" }) {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`text-[32px] sm:text-[40px] lg:text-[52px] font-bold text-slate-900 dark:text-white leading-[1.08] tracking-[-0.02em] mb-6 ${className}`}
        >
            {children}
        </motion.h2>
    );
}

export function SectionDescription({ children }) {
    return (
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[17px] text-slate-500 dark:text-navy-200 leading-[1.8] max-w-2xl mb-10"
        >
            {children}
        </motion.p>
    );
}

export function FadeInView({ children, className = "", delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerContainer({ children, className = "" }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.08,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className = "" }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        ease: [0.25, 0.1, 0.25, 1],
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
