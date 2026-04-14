"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-white py-20 overflow-hidden">
            <div className="absolute inset-0 bg-noise opacity-15 dark:opacity-30 pointer-events-none" />
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-5">
                            <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-electric to-violet flex items-center justify-center text-white text-xs font-bold tracking-wider shadow-glow-sm">
                                AI
                            </span>
                            <span className="font-bold text-lg tracking-tight">
                                IT <span className="text-gradient">Alliance</span> AI
                            </span>
                        </Link>
                        <p className="text-slate-500 dark:text-navy-200 text-[14px] leading-[1.75] max-w-sm">
                            Enterprise AI architecture and revenue engineering for
                            organizations ready to lead with intelligence.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-electric/40 mb-5">
                            Navigate
                        </h4>
                        <div className="flex flex-col gap-3">
                            {[
                                { label: "Home", href: "/" },
                                { label: "Blog", href: "/blog" },
                                { label: "Templates", href: "/websitebuilder" },
                                { label: "Contact", href: "/contact" },
                                { label: "Privacy Policy", href: "/privacy" },
                                { label: "Terms & Conditions", href: "/terms" },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-[14px] text-slate-500 dark:text-navy-200 hover:text-electric transition-colors duration-300"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-electric/40 mb-5">
                            Contact
                        </h4>
                        <div className="flex flex-col gap-3">
                            <a
                                href="mailto:strategy@itallianceai.com"
                                className="text-[14px] text-slate-500 dark:text-navy-200 hover:text-electric transition-colors duration-300"
                            >
                                strategy@itallianceai.com
                            </a>
                            <span className="text-[14px] text-slate-400 dark:text-navy-300">
                                Enterprise Inquiries Only
                            </span>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    className="divider-thin my-12 origin-left"
                />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] text-slate-400 dark:text-navy-400 tracking-wide">
                        &copy; {new Date().getFullYear()} IT Alliance AI. All rights
                        reserved.
                    </p>
                    <div className="flex gap-7">
                        <Link
                            href="/terms"
                            className="text-[11px] text-slate-400 dark:text-navy-400 hover:text-electric transition-colors tracking-wide"
                        >
                            Terms &amp; Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
