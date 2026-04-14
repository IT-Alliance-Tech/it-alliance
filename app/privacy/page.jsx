"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocialNav from "@/components/FloatingSocialNav";

export default function PrivacyPolicy() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    };

    const sections = [
        {
            title: "1. Information We Collect",
            content: (
                <div className="space-y-6">
                    <div>
                        <h4 className="text-base font-semibold text-slate-800 dark:text-white mb-3">1a. Personal Information</h4>
                        <p className="text-slate-600 dark:text-navy-200 leading-relaxed">
                            When you engage with IT Alliance AI as a partner, we may collect the following types of personal information:
                        </p>
                        <ul className="list-disc list-inside mt-3 space-y-2 text-slate-600 dark:text-navy-200">
                            <li>Name</li>
                            <li>Phone Number</li>
                            <li>Email Address: strategy@itallianceai.com</li>
                            <li>Business Address</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-base font-semibold text-slate-800 dark:text-white mb-3">1b. Business Information</h4>
                        <p className="text-slate-600 dark:text-navy-200 leading-relaxed">
                            We are an AI architecture and technology company that allows businesses to build their digital presence with professional solutions. Our comprehensive approach lets you create powerful digital solutions for yourself or your clients. IT Alliance was founded with a vision of simplifying the digital transformation journey for enterprises globally.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-base font-semibold text-slate-800 dark:text-white mb-3">1.2 Non-Personal Information</h4>
                        <p className="text-slate-600 dark:text-navy-200 leading-relaxed">
                            We may also collect non-personal information, such as aggregated and anonymized data, for statistical and analytical purposes to improve our platform performance and user experience.
                        </p>
                    </div>
                </div>
            )
        },
        {
            title: "2. How We Use Your Information",
            content: (
                <p className="text-slate-600 dark:text-navy-200 leading-relaxed">
                    We use the collected information for the following purposes: to provide and improve our services, communicate with you about your projects, process payments, and ensure the security and integrity of our enterprise AI platform.
                </p>
            )
        },
        {
            title: "3. Information Sharing",
            content: (
                <p className="text-slate-600 dark:text-navy-200 leading-relaxed">
                    We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, provided they agree to maintain strict confidentiality and adhere to our data protection standards.
                </p>
            )
        },
        {
            title: "4. Data Security",
            content: (
                <p className="text-slate-600 dark:text-navy-200 leading-relaxed">
                    We implement rigorous security measures and industry-standard protocols to protect your personal information from unauthorized access, disclosure, alteration, and destruction.
                </p>
            )
        },
        {
            title: "5. Your Rights & Choices",
            content: (
                <div className="space-y-3 text-slate-600 dark:text-navy-200">
                    <p>You have the following rights regarding your personal data:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Access:</strong> Request access to the personal information we hold about you.</li>
                        <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
                        <li><strong>Deletion:</strong> Request the deletion of your personal information under certain circumstances.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "6. Changes to This Policy",
            content: (
                <p className="text-slate-600 dark:text-navy-200 leading-relaxed">
                    We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Any updates will be effective immediately upon posting to this page.
                </p>
            )
        },
        {
            title: "7. Contact Us",
            content: (
                <div className="bg-slate-100 dark:bg-navy-900/50 rounded-2xl p-8 border border-slate-200 dark:border-white/5">
                    <p className="text-slate-600 dark:text-navy-200 mb-6 font-medium">
                        If you have questions about this Privacy Policy or our data practices, please reach out to our strategy team:
                    </p>
                    <div className="flex flex-col gap-4">
                        <a href="mailto:strategy@itallianceai.com" className="text-electric hover:text-violet transition-colors font-semibold flex items-center gap-2">
                            <span>Email:</span> strategy@itallianceai.com
                        </a>
                        <a href="tel:+919108463663" className="text-slate-700 dark:text-white hover:text-electric transition-colors flex items-center gap-2">
                            <span>Phone:</span> +91 91084 63663
                        </a>
                    </div>
                </div>
            )
        }
    ];

    return (
        <main className="bg-white dark:bg-navy-950 min-h-screen">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-noise opacity-10 dark:opacity-20 pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-electric/10 to-transparent blur-3xl opacity-30 pointer-events-none" />
                
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                    <motion.div 
                        {...fadeIn}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 border border-electric/20 text-electric text-[11px] font-bold uppercase tracking-widest mb-6">
                            Compliance & Trust
                        </div>
                        <h1 className="text-[32px] sm:text-[42px] lg:text-[52px] font-bold tracking-[-0.02em] leading-[1.08] mb-6">
                            Privacy <span className="text-gradient">Policy</span>
                        </h1>
                        <p className="text-slate-500 dark:text-navy-200 text-base leading-relaxed mb-8">
                            Last Updated: April 13, 2024
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="pb-32 relative">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Summary / Introduction */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-4"
                        >
                            <div className="sticky top-32">
                                <h2 className="text-xl font-bold mb-6">Introduction</h2>
                                <p className="text-slate-600 dark:text-navy-200 leading-relaxed italic border-l-2 border-electric pl-6">
                                    "Welcome to IT Alliance AI. Your privacy is paramount. This policy outlines how we protect and manage your data while driving your digital transformation."
                                </p>
                            </div>
                        </motion.div>

                        {/* Detailed Policy */}
                        <div className="lg:col-span-8">
                            <div className="space-y-16">
                                {sections.map((section, idx) => (
                                    <motion.div 
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        className="group"
                                    >
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 group-hover:text-electric transition-colors duration-300">
                                            {section.title}
                                        </h3>
                                        <div className="prose prose-slate dark:prose-invert max-w-none">
                                            {section.content}
                                        </div>
                                        {idx !== sections.length - 1 && (
                                            <div className="divider-thin mt-16 opacity-50" />
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingSocialNav />
        </main>
    );
}
