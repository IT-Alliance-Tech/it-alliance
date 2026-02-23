"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Problem", href: "#problem" },
    { label: "Architecture", href: "#architecture" },
    { label: "Pillars", href: "#pillars" },
    { label: "Industries", href: "#industries" },
    { label: "Engagement", href: "#engagement" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-[#0A0F1C]/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/[0.06]"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-[1280px] mx-auto px-6 sm:px-8 flex items-center justify-between h-[76px]">
                    <a
                        href="#"
                        className="font-bold text-xl tracking-tight flex items-center gap-3 group"
                    >
                        <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-electric to-violet flex items-center justify-center text-white text-xs font-bold tracking-wider shadow-glow-sm group-hover:shadow-glow-md transition-shadow duration-500">
                            AI
                        </span>
                        <span className="text-slate-900 dark:text-white">
                            IT <span className="text-gradient">Alliance</span>
                        </span>
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-[13px] text-slate-500 dark:text-navy-200 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 font-medium tracking-wide relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-electric to-violet group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}

                        <a
                            href="#cta"
                            className="relative bg-gradient-to-r from-electric to-violet text-white text-[13px] font-semibold px-6 py-2.5 rounded-lg hover:shadow-glow-md transition-all duration-500 tracking-wide overflow-hidden group"
                        >
                            <span className="relative z-10">Schedule Briefing</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-violet to-electric opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </a>
                    </div>

                    <div className="flex md:hidden items-center gap-3">
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                animate={
                                    mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }
                                }
                                className="w-5 h-[1.5px] bg-slate-700 dark:bg-white block"
                            />
                            <motion.span
                                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="w-5 h-[1.5px] bg-slate-700 dark:bg-white block"
                            />
                            <motion.span
                                animate={
                                    mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }
                                }
                                className="w-5 h-[1.5px] bg-slate-700 dark:bg-white block"
                            />
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="fixed inset-0 top-[76px] bg-[#0A0F1C]/95 backdrop-blur-xl z-40 md:hidden"
                    >
                        <div className="flex flex-col items-center justify-center gap-7 pt-20">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-lg text-slate-700 dark:text-white font-medium hover:text-electric transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#cta"
                                onClick={() => setMobileOpen(false)}
                                className="bg-gradient-to-r from-electric to-violet text-white font-semibold px-8 py-3.5 rounded-lg mt-4 shadow-glow-sm"
                            >
                                Schedule Briefing
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
