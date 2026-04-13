"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ReadingProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-[76px] left-0 right-0 h-1 bg-gradient-to-r from-electric via-violet to-cyan-400 z-[60] origin-left shadow-glow-sm"
            style={{ scaleX }}
        />
    );
}
