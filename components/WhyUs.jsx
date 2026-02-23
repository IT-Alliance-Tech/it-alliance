"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const differentiators = [
  {
    title: "Architecture-First",
    desc: "We design before we deploy. Every AI system is built on a strategic architecture aligned to your revenue model.",
    icon: "🏗️",
    accent: "#3B82F6",
  },
  {
    title: "Revenue-Aligned",
    desc: "Every engagement is measured by business outcomes — not model accuracy scores. Revenue impact is the only metric.",
    icon: "📈",
    accent: "#8B5CF6",
  },
  {
    title: "Enterprise-Native",
    desc: "Built for compliance, governance, and scale from day one. No startup experiments retrofitted for enterprise.",
    icon: "🏢",
    accent: "#10B981",
  },
  {
    title: "Full-Stack AI",
    desc: "From strategy through deployment through optimization. One partner. One architecture. One accountable team.",
    icon: "⚙️",
    accent: "#F59E0B",
  },
  {
    title: "Continuous Learning",
    desc: "Our systems don't just automate — they learn. Every data point makes your AI infrastructure smarter.",
    icon: "🧠",
    accent: "#EF4444",
  },
  {
    title: "Knowledge Transfer",
    desc: "We build your team's AI capabilities alongside the systems. You own the intelligence we create.",
    icon: "🎓",
    accent: "#06B6D4",
  },
];

function Card({ diff, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className="relative group rounded-2xl overflow-hidden flex flex-col bg-white dark:bg-transparent border border-slate-200 dark:border-white/[0.07] shadow-sm dark:shadow-none"
      style={{
        minHeight: "220px",
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute -top-16 -left-16 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
        style={{ background: diff.accent }}
      />

      {/* Watermark number */}
      <span
        className="absolute bottom-2 right-4 text-[90px] font-black leading-none select-none pointer-events-none tabular-nums text-slate-900/[0.04] dark:text-white/[0.03]"
        style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          lineHeight: 1,
        }}
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative z-10 p-7 flex flex-col gap-4 flex-1">
        {/* Top row: icon + pill */}
        <div className="flex items-center justify-between">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
            style={{ background: `${diff.accent}18`, border: `1px solid ${diff.accent}30` }}
          >
            {diff.icon}
          </div>
          <span
            className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full"
            style={{
              background: `${diff.accent}15`,
              color: diff.accent,
              border: `1px solid ${diff.accent}35`,
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-[18px] font-bold leading-tight text-slate-900 dark:text-[#f0f0f5]"
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            letterSpacing: "-0.01em",
          }}
        >
          {diff.title}
        </h3>

        {/* Animated divider */}
        <div
          className="w-8 h-px rounded-full transition-all duration-500 group-hover:w-16"
          style={{ background: `linear-gradient(90deg, ${diff.accent}, transparent)` }}
        />

        {/* Description */}
        <p
          className="text-[13.5px] leading-[1.8] flex-1 text-slate-500 dark:text-white/[0.38]"
        >
          {diff.desc}
        </p>
      </div>

      {/* Bottom accent bar on hover */}
      <div
        className="h-px w-0 group-hover:w-[calc(100%-3.5rem)] transition-all duration-500 ease-out mx-7 mb-5 rounded-full"
        style={{ background: `linear-gradient(90deg, ${diff.accent}80, transparent)` }}
      />
    </motion.div>
  );
}

export default function WhyUs() {
  const headRef = useRef(null);
  const inView = useInView(headRef, { once: true });

  return (
    <section
      id="why-us"
      className="relative py-14 md:py-20 px-4 sm:px-8 bg-[#F8FAFC] dark:bg-[#08080e]"
    >
      {/* Soft radial background — dark mode only */}
      <div
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Label */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-electric/10 flex items-center justify-center border border-blue-500/10 dark:border-electric/10">
            <Award className="w-5 h-5 text-blue-500 dark:text-electric" />
          </div>
          <span
            className="text-[10.5px] font-bold uppercase tracking-[0.24em] text-blue-500 dark:text-[#3B82F6]"
          >
            Why IT Alliance AI
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-900 dark:text-[#f0f0f5]"
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            marginBottom: "1rem",
          }}
        >
          The Difference Is{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Architecture
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mb-14 max-w-lg text-[15px] leading-relaxed text-slate-500 dark:text-white/[0.36]"
        >
          We are not an AI vendor. We are an AI architecture firm — dedicated to
          building intelligent revenue systems that deliver compound returns.
        </motion.p>

        {/* Perfectly uniform 3-column grid */}
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          {differentiators.map((diff, i) => (
            <Card key={i} diff={diff} index={i} />
          ))}
        </div>
      </div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');`}</style>
    </section>
  );
}