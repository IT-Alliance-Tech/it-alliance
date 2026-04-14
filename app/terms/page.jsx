"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocialNav from "@/components/FloatingSocialNav";

const sections = [
    {
        number: "01",
        title: "Introduction",
        summary: "Agreement to our terms upon access",
        content:
            "By accessing and using our website, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully before using our services.",
    },
    {
        number: "02",
        title: "Use of Website",
        summary: "Lawful, respectful usage only",
        content:
            "You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit the use of this website by any third party.",
    },
    {
        number: "03",
        title: "Intellectual Property",
        summary: "All content owned by IT Alliance Tech",
        content:
            "All content, design, images, and materials on this website are the property of IT Alliance Tech unless otherwise stated. You may not copy, distribute, or reproduce any content without prior written permission.",
    },
    {
        number: "04",
        title: "Services",
        summary: "Accuracy of service information",
        content:
            "We aim to provide accurate and up-to-date information regarding our services. However, we do not guarantee that descriptions, pricing, or other content on the website is always error-free.",
    },
    {
        number: "05",
        title: "Limitation of Liability",
        summary: "Use of site is at your own risk",
        content:
            "We are not liable for any direct, indirect, or incidental damages arising from the use of this website or our services. Use of the website is at your own risk.",
    },
    {
        number: "06",
        title: "Third-Party Links",
        summary: "External sites are not our responsibility",
        content:
            "Our website may contain links to third-party websites. We are not responsible for the content, security, or practices of these external websites.",
    },
    {
        number: "07",
        title: "Changes to Terms",
        summary: "We may update these terms at any time",
        content:
            "We reserve the right to update or modify these Terms & Conditions at any time without prior notice. Continued use of our website after changes indicates your acceptance of the updated terms.",
    },
    {
        number: "08",
        title: "Governing Law",
        summary: "Jurisdiction: Bengaluru, Karnataka, India",
        content:
            "These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.",
    },
];

function AccordionItem({ section, index, isOpen, onToggle }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="group"
        >
            <div
                className={`relative rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer
                    ${isOpen
                        ? "border-electric/40 bg-gradient-to-br from-electric/5 via-violet/5 to-transparent shadow-[0_0_40px_rgba(59,130,246,0.08)]"
                        : "border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]"
                    }`}
                onClick={onToggle}
            >
                {/* Animated top gradient line when open */}
                {isOpen && (
                    <motion.div
                        layoutId={`bar-${index}`}
                        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-electric via-violet to-cyan"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.4 }}
                    />
                )}

                <div className="flex items-center gap-6 px-8 py-6">
                    {/* Number */}
                    <span
                        className={`font-bold text-[13px] tracking-[0.2em] transition-colors duration-300 flex-shrink-0 ${isOpen ? "text-gradient-light" : "text-white/20 group-hover:text-white/40"
                            }`}
                    >
                        {section.number}
                    </span>

                    {/* Title + summary */}
                    <div className="flex-1 min-w-0">
                        <h3
                            className={`font-semibold text-[15px] transition-colors duration-300 ${isOpen ? "text-white" : "text-white/70 group-hover:text-white/90"
                                }`}
                        >
                            {section.title}
                        </h3>
                        {!isOpen && (
                            <p className="text-[13px] text-white/30 mt-0.5 truncate">
                                {section.summary}
                            </p>
                        )}
                    </div>

                    {/* Chevron */}
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex-shrink-0 transition-colors duration-300 ${isOpen ? "text-electric" : "text-white/20 group-hover:text-white/40"
                            }`}
                    >
                        <ChevronDown className="w-5 h-5" />
                    </motion.div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="px-8 pb-8 pt-0">
                                <div className="h-[1px] bg-gradient-to-r from-white/5 via-white/10 to-transparent mb-6" />
                                <p className="text-[13px] text-white/60 leading-[1.85]">
                                    {section.content}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default function TermsAndConditions() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <main className="bg-[#0A0F1C] min-h-screen">
            <Navbar />

            {/* ── HERO ── */}
            <section className="relative pt-36 pb-28 overflow-hidden">
                {/* Background mesh */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-noise opacity-30" />

                    {/* Grid */}
                    <div
                        className="absolute inset-0 opacity-[0.025]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(59,130,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)",
                            backgroundSize: "80px 80px",
                        }}
                    />

                    {/* Glow orbs */}
                    <motion.div
                        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
                        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-electric/20 blur-[120px]"
                    />
                    <motion.div
                        animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.18, 0.1] }}
                        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-violet/15 blur-[100px]"
                    />
                </div>

                <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
                    <div className="max-w-2xl">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-electric/20 bg-electric/5 mb-8"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
                            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-electric/80">
                                Legal &amp; Compliance
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.08] tracking-[-0.02em] text-white mb-6"
                        >
                            Terms &amp;{" "}
                            <span className="text-gradient">Conditions</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-[16px] text-white/40 leading-[1.8] mb-2"
                        >
                            Effective as of{" "}
                            <span className="text-white/60 font-medium">April 13, 2025</span>
                            {" "}· IT Alliance Tech, Bengaluru, India
                        </motion.p>
                    </div>

                    {/* Stats strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="flex flex-wrap gap-8 mt-14"
                    >
                        {[
                            { label: "Sections", value: "8" },
                            { label: "Jurisdiction", value: "India" },
                            { label: "Last Revised", value: "Apr 2025" },
                        ].map((s, i) => (
                            <div key={i} className="flex flex-col gap-1">
                                <span className="text-[22px] font-bold text-white tracking-tight">
                                    {s.value}
                                </span>
                                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30">
                                    {s.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── MAIN CONTENT ── */}
            <section className="pb-32 relative">
                {/* Subtle bottom glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-violet/5 blur-[100px] pointer-events-none" />

                <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 relative">

                        {/* ── Left sticky column ── */}
                        <div className="hidden lg:block">
                            <div className="sticky top-32">
                                {/* Intro card */}
                                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 mb-8">
                                    <p className="text-[13px] text-white/40 leading-[1.8]">
                                        These terms constitute a legally binding agreement between you and IT Alliance Tech. By using our website you accept all clauses in full.
                                    </p>
                                </div>

                                {/* Section index */}
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-electric/40 mb-4 px-1">
                                    Sections
                                </p>
                                <div className="flex flex-col gap-1">
                                    {sections.map((s, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
                                            className={`text-left flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${openIndex === i
                                                    ? "bg-electric/10 text-electric"
                                                    : "text-white/30 hover:text-white/60 hover:bg-white/[0.03]"
                                                }`}
                                        >
                                            <span className="text-[10px] font-bold tracking-widest opacity-60">
                                                {s.number}
                                            </span>
                                            <span className="text-[13px] font-medium leading-snug">
                                                {s.title}
                                            </span>
                                        </button>
                                    ))}
                                </div>

                                {/* Contact card */}
                                <div className="mt-10 rounded-2xl border border-white/5 bg-gradient-to-br from-electric/5 to-violet/5 p-6">
                                    <p className="text-[12px] text-white/40 mb-4 leading-relaxed">
                                        Questions about these terms?
                                    </p>
                                    <a
                                        href="mailto:strategy@itallianceai.com"
                                        className="text-[13px] font-semibold text-electric hover:text-violet transition-colors duration-200 block mb-2"
                                    >
                                        strategy@itallianceai.com
                                    </a>
                                    <a
                                        href="tel:+919108463663"
                                        className="text-[13px] text-white/40 hover:text-white/70 transition-colors duration-200"
                                    >
                                        +91 91084 63663
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ── Right accordion column ── */}
                        <div className="flex flex-col gap-3">
                            {sections.map((section, i) => (
                                <AccordionItem
                                    key={i}
                                    section={section}
                                    index={i}
                                    isOpen={openIndex === i}
                                    onToggle={() => setOpenIndex(i === openIndex ? -1 : i)}
                                />
                            ))}

                            {/* Bottom contact card (mobile) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="lg:hidden mt-6 rounded-2xl border border-white/5 bg-gradient-to-br from-electric/5 to-violet/5 p-8"
                            >
                                <p className="text-[14px] text-white/50 mb-6 leading-relaxed">
                                    Questions about these Terms &amp; Conditions? Reach our team:
                                </p>
                                <div className="flex flex-col gap-3">
                                    <a
                                        href="mailto:strategy@itallianceai.com"
                                        className="font-semibold text-electric hover:text-violet transition-colors"
                                    >
                                        strategy@itallianceai.com
                                    </a>
                                    <a
                                        href="tel:+919108463663"
                                        className="text-white/50 hover:text-white/80 transition-colors"
                                    >
                                        +91 91084 63663
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingSocialNav />
        </main>
    );
}
