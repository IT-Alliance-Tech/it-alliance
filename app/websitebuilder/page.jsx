"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocialNav from "@/components/FloatingSocialNav";

/* ─── data ─────────────────────────────────────────── */
const templates = [
  { id: 1,  title: "Car Rental",           tag: "Business",   link: "https://car-rental-two-xi.vercel.app/",                         category: "business",  color: "from-blue-500 to-cyan-400"     },
  { id: 2,  title: "Education Website",    tag: "E-Commerce", link: "https://education-website-eta-ten.vercel.app/",                  category: "ecommerce", color: "from-violet-500 to-pink-400"   },
  { id: 3,  title: "Business Website",     tag: "Business",   link: "https://business-three-woad.vercel.app/",                        category: "business",  color: "from-sky-500 to-blue-400"      },
  { id: 4,  title: "Travels Website",      tag: "Business",   link: "https://travels-henna.vercel.app/",                              category: "business",  color: "from-emerald-500 to-teal-400"  },
  { id: 5,  title: "Events Template",      tag: "E-Commerce", link: "https://events-templete.vercel.app/",                            category: "ecommerce", color: "from-orange-500 to-red-400"    },
  { id: 6,  title: "Ecommerce Website",    tag: "E-Commerce", link: "https://ecommerce-mocha-pi.vercel.app/",                         category: "ecommerce", color: "from-pink-500 to-rose-400"     },
  { id: 7,  title: "Construction",         tag: "Business",   link: "https://construction-puce-alpha.vercel.app/",                    category: "business",  color: "from-amber-500 to-yellow-400"  },
  { id: 8,  title: "Fashion Ecommerce",    tag: "E-Commerce", link: "https://fashion-ecommerce-sandy.vercel.app/",                    category: "ecommerce", color: "from-fuchsia-500 to-purple-400"},
  { id: 9,  title: "Medical Website",      tag: "Business",   link: "https://medical-website-indol.vercel.app/",                      category: "business",  color: "from-cyan-500 to-blue-400"     },
  { id: 10, title: "Event Mania",          tag: "Business",   link: "https://event-maina.vercel.app/",                                category: "business",  color: "from-red-500 to-orange-400"    },
  { id: 11, title: "Hospital Website",     tag: "E-Commerce", link: "https://hospital-templete-wine.vercel.app/",                     category: "ecommerce", color: "from-teal-500 to-green-400"    },
  { id: 12, title: "Travel-001",           tag: "Business",   link: "https://travels-001.vercel.app/",                                category: "business",  color: "from-blue-600 to-indigo-400"   },
  { id: 13, title: "Business-001",         tag: "Business",   link: "https://business001.vercel.app/",                                category: "business",  color: "from-slate-500 to-blue-400"    },
  { id: 14, title: "Business-002",         tag: "Business",   link: "https://business002.vercel.app/",                                category: "business",  color: "from-indigo-500 to-violet-400" },
  { id: 15, title: "Eraflix Replica",      tag: "E-Commerce", link: "https://eraflix-replica.vercel.app/",                            category: "ecommerce", color: "from-red-600 to-pink-400"      },
  { id: 16, title: "Real Estate",          tag: "Business",   link: "https://realestate-seven-liart.vercel.app/",                     category: "business",  color: "from-green-500 to-emerald-400" },
  { id: 17, title: "Clinical Management",  tag: "Business",   link: "https://clinical-management-omega.vercel.app/book-appointment",  category: "business",  color: "from-sky-600 to-cyan-400"      },
  { id: 18, title: "KK Replica",           tag: "E-Commerce", link: "https://kk-replica.vercel.app/",                                 category: "ecommerce", color: "from-purple-600 to-fuchsia-400"},
  { id: 19, title: "Recruitment Project",  tag: "Business",   link: "https://recruitment-project-dun.vercel.app/",                    category: "business",  color: "from-blue-500 to-violet-400"   },
];

const FILTERS = ["all", "business", "ecommerce"];

/* ─── Number counter animation ─────────────────────── */
function Counter({ target }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / 30);
    const t = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(t); }
      else setCount(start);
    }, 30);
    return () => clearInterval(t);
  }, [target]);
  return <span>{count}</span>;
}

/* ─── Main page ─────────────────────────────────────── */
export default function WebsiteTemplates() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch]  = useState("");
  const [active, setActive]  = useState(templates[0]);
  const [iframeKey, setIframeKey] = useState(0);
  const listRef = useRef(null);

  const filtered = templates.filter(t =>
    (filter === "all" || t.category === filter) &&
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  /* when filter changes, auto-select first result */
  useEffect(() => {
    if (filtered.length > 0) {
      setActive(filtered[0]);
      setIframeKey(k => k + 1);
    }
  }, [filter, search]);

  const handleSelect = (t) => {
    setActive(t);
    setIframeKey(k => k + 1);
  };

  return (
    <main className="bg-[#0A0F1C] min-h-screen flex flex-col">
      <Navbar />

      {/* ── PAGE HEADER ───────────────────────────────── */}
      <section className="relative pt-36 pb-16 overflow-hidden flex-shrink-0">
        {/* animated gradient mesh background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0"
            style={{ backgroundImage: "linear-gradient(rgba(59,130,246,0.35) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.35) 1px,transparent 1px)", backgroundSize: "80px 80px", opacity: 0.025 }} />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.18, 0.32, 0.18] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full bg-electric/20 blur-[130px]"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-10 right-0 w-[500px] h-[400px] rounded-full bg-violet/15 blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-cyan-500/10 blur-[90px]"
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 relative z-10 text-center">
          {/* badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric/25 bg-electric/8 mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-electric">
              Template Showcase
            </span>
          </motion.div>

          {/* headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-[68px] font-bold text-white tracking-[-0.03em] leading-[1.05] mb-5"
          >
            Explore Our{" "}
            <span className="text-gradient">Website Templates</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/45 text-[17px] max-w-xl mx-auto leading-relaxed mb-12"
          >
            Click any template on the left to preview it live. Ready to launch — just pick and deploy.
          </motion.p>

          {/* stat cards row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="inline-flex flex-wrap justify-center gap-4"
          >
            {[
              { label: "Total Templates", n: templates.length,                                            icon: "◈", grad: "from-electric/20 to-violet/10",  border: "border-electric/20" },
              { label: "Business",        n: templates.filter(t => t.category === "business").length,     icon: "◉", grad: "from-blue-500/15 to-cyan-400/10", border: "border-blue-500/20" },
              { label: "E-Commerce",      n: templates.filter(t => t.category === "ecommerce").length,    icon: "◈", grad: "from-violet/15 to-pink-400/10",   border: "border-violet/20"   },
            ].map((s, i) => (
              <div key={i}
                className={`flex items-center gap-4 px-7 py-4 rounded-2xl bg-gradient-to-br ${s.grad} border ${s.border} backdrop-blur-sm`}
              >
                <span className="text-2xl text-white/20">{s.icon}</span>
                <div className="text-left">
                  <div className="text-3xl font-bold text-white leading-none">
                    <Counter target={s.n} />
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-white/35 mt-1">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SPLIT PANEL ───────────────────────────────── */}
      <section className="flex-1 max-w-[1400px] w-full mx-auto px-6 sm:px-10 pb-20">
        <div className="flex flex-col lg:flex-row gap-6 h-full">

          {/* ── LEFT: filter + scrollable list ────────── */}
          <div className="lg:w-[340px] flex-shrink-0 flex flex-col gap-4">

            {/* search */}
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
              </svg>
              <input
                type="text" placeholder="Search…" value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-8 py-3 rounded-xl bg-white/[0.04] border border-white/[0.07] text-white text-[13px] placeholder-white/20 focus:outline-none focus:border-electric/40 focus:ring-1 focus:ring-electric/30 transition-all"
              />
              {search && (
                <button onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 text-xl leading-none">×</button>
              )}
            </div>

            {/* filter tabs */}
            <div className="flex gap-1 p-1 bg-white/[0.03] border border-white/[0.06] rounded-xl">
              {FILTERS.map(f => (
                <button key={f}
                  onClick={() => setFilter(f)}
                  className={`flex-1 py-2 text-[12px] font-semibold rounded-lg transition-all duration-300 capitalize ${
                    filter === f
                      ? "bg-gradient-to-r from-electric to-violet text-white shadow-glow-sm"
                      : "text-white/40 hover:text-white/70"
                  }`}>
                  {f === "all" ? "All" : f === "ecommerce" ? "E-Commerce" : "Business"}
                </button>
              ))}
            </div>

            {/* template list */}
            <div ref={listRef}
              className="flex-1 overflow-y-auto space-y-1.5 pr-1 min-h-0"
              style={{ maxHeight: "calc(100vh - 340px)", scrollbarWidth: "thin", scrollbarColor: "rgba(59,130,246,0.2) transparent" }}
            >
              {filtered.length === 0 ? (
                <div className="text-center py-16 text-white/30 text-sm">No templates match.</div>
              ) : (
                filtered.map((t, i) => {
                  const isActive = active?.id === t.id;
                  return (
                    <motion.button
                      key={t.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.03 }}
                      onClick={() => handleSelect(t)}
                      className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-left transition-all duration-300 group ${
                        isActive
                          ? "bg-gradient-to-r from-electric/15 to-violet/10 border border-electric/25"
                          : "bg-white/[0.02] border border-transparent hover:bg-white/[0.05] hover:border-white/[0.08]"
                      }`}
                    >
                      {/* color dot */}
                      <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${t.color} flex-shrink-0 flex items-center justify-center shadow-md`}>
                        <span className="text-white font-bold text-[11px]">{t.id.toString().padStart(2,"0")}</span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className={`text-[14px] font-semibold truncate transition-colors ${isActive ? "text-white" : "text-white/60 group-hover:text-white/90"}`}>
                          {t.title}
                        </p>
                        <p className="text-[11px] text-white/25 mt-0.5">{t.tag}</p>
                      </div>

                      {isActive && (
                        <span className="flex-shrink-0 w-1.5 h-8 rounded-full bg-gradient-to-b from-electric to-violet" />
                      )}
                    </motion.button>
                  );
                })
              )}
            </div>
          </div>

          {/* ── RIGHT: live preview panel ──────────────── */}
          <div className="flex-1 flex flex-col min-w-0">
            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex-1 flex flex-col rounded-2xl border border-white/[0.08] overflow-hidden bg-[#060C1A]"
                  style={{ minHeight: 560 }}
                >
                  {/* preview top bar */}
                  <div className="flex-shrink-0 flex items-center justify-between px-5 py-3.5 bg-[#0D1626] border-b border-white/[0.06]">
                    {/* browser chrome */}
                    <div className="flex items-center gap-5">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"    />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60"  />
                      </div>
                      <div className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.07] rounded-full px-4 py-1.5 min-w-0">
                        <svg className="w-3 h-3 text-white/20 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.1.9-2 2-2m-2 2v5m0-5H9m3 0h3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span className="text-[11px] text-white/30 truncate">{active.link.replace("https://","")}</span>
                      </div>
                    </div>

                    {/* actions */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${active.color} text-white`}>
                        {active.tag}
                      </span>
                      <button
                        onClick={() => window.open(active.link, "_blank")}
                        className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.08] text-white/70 text-[12px] font-medium hover:bg-white/[0.1] hover:text-white transition-all"
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                        Open
                      </button>
                      <Link
                        href="/contact"
                        className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-electric to-violet text-white text-[12px] font-semibold hover:shadow-glow-sm transition-all"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>

                  {/* iframe */}
                  <div className="flex-1 relative overflow-hidden">
                    <iframe
                      key={iframeKey}
                      src={active.link}
                      title={active.title}
                      className="absolute inset-0 w-full h-full border-none"
                      style={{ pointerEvents: "auto" }}
                    />
                    {/* mobile overlay to prevent accidental scroll capture */}
                    <div className="absolute inset-0 lg:hidden" onClick={() => window.open(active.link, "_blank")} />
                  </div>

                  {/* bottom bar */}
                  <div className="flex-shrink-0 flex items-center justify-between px-5 py-3 bg-[#0D1626] border-t border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${active.color}`} />
                      <span className="text-[13px] font-semibold text-white">{active.title}</span>
                    </div>
                    <div className="flex items-center gap-4 text-[11px] text-white/25">
                      <span>Responsive</span>
                      <span>·</span>
                      <span>Production-ready</span>
                      <span>·</span>
                      <span className="text-white/40">{active.id} of {filtered.length}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* nav arrows */}
            <div className="flex items-center gap-3 mt-4 justify-end">
              <button
                onClick={() => {
                  const idx = filtered.findIndex(t => t.id === active?.id);
                  if (idx > 0) handleSelect(filtered[idx - 1]);
                }}
                disabled={filtered.findIndex(t => t.id === active?.id) === 0}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.07] text-white/50 text-[13px] font-medium hover:bg-white/[0.08] hover:text-white/80 disabled:opacity-25 disabled:cursor-not-allowed transition-all"
              >
                ← Previous
              </button>
              <button
                onClick={() => {
                  const idx = filtered.findIndex(t => t.id === active?.id);
                  if (idx < filtered.length - 1) handleSelect(filtered[idx + 1]);
                }}
                disabled={filtered.findIndex(t => t.id === active?.id) === filtered.length - 1}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.07] text-white/50 text-[13px] font-medium hover:bg-white/[0.08] hover:text-white/80 disabled:opacity-25 disabled:cursor-not-allowed transition-all"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="border-t border-white/[0.06] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-electric/5 via-transparent to-violet/5 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Need something <span className="text-gradient">custom-built?</span>
          </h2>
          <p className="text-white/40 mb-8 text-[16px] max-w-lg mx-auto leading-relaxed">
            We design and architect bespoke websites and AI-powered systems tailored to your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-electric to-violet text-white font-semibold px-8 py-3.5 rounded-xl hover:shadow-glow-md transition-all duration-500 overflow-hidden">
              <span className="relative z-10">Talk to Our Team</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet to-electric opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
            <Link href="/#architecture"
              className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/70 font-semibold px-8 py-3.5 rounded-xl hover:bg-white/5 hover:border-white/20 hover:text-white transition-all duration-300">
              View Architecture
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingSocialNav />
    </main>
  );
}
