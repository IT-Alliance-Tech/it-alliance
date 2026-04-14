"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocialNav from "@/components/FloatingSocialNav";
import Link from "next/link";
import {
    Mail,
    Phone,
    MessageSquare,
    ArrowRight,
    Send,
    Shield,
    Clock,
    Globe,
    CheckCircle2,
} from "lucide-react";

const contactMethods = [
    {
        icon: Mail,
        label: "Email Us",
        value: "strategy@itallianceai.com",
        href: "mailto:strategy@itallianceai.com",
        description: "For enterprise and strategic inquiries",
    },
    {
        icon: Phone,
        label: "Call Us",
        value: "+91 91084 63663",
        href: "tel:+919108463663",
        description: "Monday – Friday, 9 AM – 6 PM IST",
    },
    {
        icon: MessageSquare,
        label: "WhatsApp",
        value: "+91 91645 00849",
        href: "https://wa.me/919164500849",
        description: "Quick responses for urgent queries",
    },
    {
        icon: Globe,
        label: "Headquarters",
        value: "India · Global Remote",
        href: null,
        description: "Serving enterprises worldwide",
    },
];

const trustBadges = [
    { icon: Shield, label: "NDA-Protected" },
    { icon: Clock, label: "48hr Response" },
    { icon: CheckCircle2, label: "Partner-Led" },
];

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate submission
        await new Promise((r) => setTimeout(r, 1500));
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <main className="bg-[#0A0F1C] min-h-screen selection:bg-electric/30">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-36 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-electric/10 via-violet/5 to-transparent blur-[120px] opacity-30 pointer-events-none" />

                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 border border-electric/20 text-electric text-[11px] font-bold uppercase tracking-widest mb-6">
                            Enterprise Inquiries
                        </div>
                        <h1 className="text-[32px] sm:text-[42px] lg:text-[52px] font-bold text-white leading-[1.08] tracking-[-0.02em] mb-6">
                            Let&apos;s Build{" "}
                            <span className="text-gradient">Something</span>{" "}
                            Extraordinary
                        </h1>
                        <p className="text-slate-400 text-base leading-relaxed max-w-xl">
                            Ready to transform your business with enterprise AI? Reach out and our strategy team will get back to you within 48 hours.
                        </p>
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        className="flex flex-wrap items-center gap-8 mt-10"
                    >
                        {trustBadges.map((b, i) => (
                            <div key={i} className="flex items-center gap-2.5 text-[12px] font-bold text-slate-500 uppercase tracking-widest">
                                <b.icon className="w-4 h-4 text-electric/60" />
                                {b.label}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-32 relative z-10">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                            className="lg:col-span-7"
                        >
                            <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-8 md:p-10 shadow-2xl overflow-hidden">
                                {/* Glow */}
                                <div className="absolute -top-32 -left-32 w-64 h-64 bg-electric/10 rounded-full blur-3xl pointer-events-none" />
                                <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-violet/10 rounded-full blur-3xl pointer-events-none" />

                                {!submitted ? (
                                    <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                                        <div>
                                            <h2 className="text-xl font-bold text-white mb-1">Send a Message</h2>
                                            <p className="text-slate-400 text-sm">Fill out the form and we&apos;ll be in touch shortly.</p>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                                                    Full Name <span className="text-electric">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    placeholder="John Smith"
                                                    className="bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-electric/50 focus:bg-white/[0.08] transition-all duration-300"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                                                    Work Email <span className="text-electric">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    placeholder="john@company.com"
                                                    className="bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-electric/50 focus:bg-white/[0.08] transition-all duration-300"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                                                    Company
                                                </label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={form.company}
                                                    onChange={handleChange}
                                                    placeholder="Acme Corp"
                                                    className="bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-electric/50 focus:bg-white/[0.08] transition-all duration-300"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                                                    Subject <span className="text-electric">*</span>
                                                </label>
                                                <select
                                                    name="subject"
                                                    required
                                                    value={form.subject}
                                                    onChange={handleChange}
                                                    className="bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-electric/50 focus:bg-white/[0.08] transition-all duration-300 appearance-none"
                                                >
                                                    <option value="" disabled className="bg-[#0A0F1C]">Select a topic</option>
                                                    <option value="AI Strategy" className="bg-[#0A0F1C]">AI Strategy</option>
                                                    <option value="Custom Development" className="bg-[#0A0F1C]">Custom Development</option>
                                                    <option value="Cloud & Infrastructure" className="bg-[#0A0F1C]">Cloud & Infrastructure</option>
                                                    <option value="Digital Transformation" className="bg-[#0A0F1C]">Digital Transformation</option>
                                                    <option value="Partnership" className="bg-[#0A0F1C]">Partnership</option>
                                                    <option value="Other" className="bg-[#0A0F1C]">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                                                Message <span className="text-electric">*</span>
                                            </label>
                                            <textarea
                                                name="message"
                                                required
                                                rows={5}
                                                value={form.message}
                                                onChange={handleChange}
                                                placeholder="Tell us about your project, goals, or challenges..."
                                                className="bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-electric/50 focus:bg-white/[0.08] transition-all duration-300 resize-none"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="relative w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-electric to-violet text-white text-[13px] font-bold px-8 py-3.5 rounded-xl hover:shadow-glow-md transition-all duration-500 tracking-wide overflow-hidden group disabled:opacity-60 disabled:cursor-not-allowed"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-violet to-electric opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <span className="relative z-10 flex items-center gap-2.5">
                                                {loading ? (
                                                    <>
                                                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                                        </svg>
                                                        Sending…
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message
                                                        <Send className="w-4 h-4" />
                                                    </>
                                                )}
                                            </span>
                                        </button>
                                    </form>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative z-10 flex flex-col items-center justify-center py-16 text-center"
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-electric/10 border border-electric/20 flex items-center justify-center mb-6">
                                            <CheckCircle2 className="w-8 h-8 text-electric" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">Message Received!</h3>
                                        <p className="text-slate-400 max-w-sm leading-relaxed">
                                            Thank you for reaching out. Our strategy team will respond within 48 hours.
                                        </p>
                                        <Link
                                            href="/"
                                            className="mt-8 inline-flex items-center gap-2 text-electric text-sm font-semibold hover:gap-3 transition-all duration-300"
                                        >
                                            Back to Home <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                            className="lg:col-span-5 flex flex-col gap-6"
                        >
                            <div>
                                <h2 className="text-lg font-bold text-white mb-2">Contact Information</h2>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Reach us directly through any of these channels. We&apos;re here to help.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4">
                                {contactMethods.map((method, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                                        className="group"
                                    >
                                        {method.href ? (
                                            <a
                                                href={method.href}
                                                target={method.href.startsWith("http") ? "_blank" : undefined}
                                                rel="noreferrer"
                                                className="flex items-start gap-4 p-5 rounded-2xl border border-white/[0.07] bg-white/[0.03] hover:border-electric/30 hover:bg-white/[0.06] transition-all duration-300 cursor-pointer"
                                            >
                                                <div className="w-10 h-10 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center flex-shrink-0 group-hover:bg-electric/20 transition-colors duration-300">
                                                    <method.icon className="w-5 h-5 text-electric" />
                                                </div>
                                                <div>
                                                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1">{method.label}</p>
                                                    <p className="text-white font-semibold text-sm">{method.value}</p>
                                                    <p className="text-slate-500 text-xs mt-0.5">{method.description}</p>
                                                </div>
                                                <ArrowRight className="w-4 h-4 text-slate-600 ml-auto self-center opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                            </a>
                                        ) : (
                                            <div className="flex items-start gap-4 p-5 rounded-2xl border border-white/[0.07] bg-white/[0.03]">
                                                <div className="w-10 h-10 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center flex-shrink-0">
                                                    <method.icon className="w-5 h-5 text-electric" />
                                                </div>
                                                <div>
                                                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1">{method.label}</p>
                                                    <p className="text-white font-semibold text-sm">{method.value}</p>
                                                    <p className="text-slate-500 text-xs mt-0.5">{method.description}</p>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.65 }}
                                className="relative rounded-2xl border border-electric/20 bg-gradient-to-br from-electric/10 to-violet/10 p-6 overflow-hidden mt-2"
                            >
                                <div className="absolute -top-8 -right-8 w-28 h-28 bg-electric/20 rounded-full blur-2xl pointer-events-none" />
                                <h4 className="text-white font-bold mb-1.5 relative z-10">Prefer a live session?</h4>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4 relative z-10">
                                    Schedule a confidential 1-on-1 strategic briefing directly with our AI architects.
                                </p>
                                <Link
                                    href="/schedule-briefing"
                                    className="relative z-10 inline-flex items-center gap-2 text-[13px] font-bold text-white bg-gradient-to-r from-electric to-violet px-5 py-2.5 rounded-lg hover:shadow-glow-sm transition-all duration-300"
                                >
                                    Schedule Briefing <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingSocialNav />
        </main>
    );
}
