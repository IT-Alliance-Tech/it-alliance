"use client";

import { useState } from "react";
import { PopupModal } from "react-calendly";
import { motion } from "framer-motion";

export default function CalendlyButton({ 
    className, 
    children, 
    url = "https://calendly.com/lavanya-italliancetech/brifeing-session",
    id = "calendly-root"
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(true)}
                className={className}
            >
                {children}
            </motion.button>

            {/* Calendly Root Element for Modal Portal */}
            <div id={id} />

            <PopupModal
                url={url}
                onModalClose={() => setIsOpen(false)}
                open={isOpen}
                rootElement={typeof document !== "undefined" ? document.getElementById(id) : null}
                /* Customizing for Dark Mode experience */
                pageSettings={{
                    backgroundColor: '0a0f1c',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '3b82f6',
                    textColor: 'ffffff'
                }}
            />
        </>
    );
}
