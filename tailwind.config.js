/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    DEFAULT: "#0A0F1C",
                    50: "#E8EAF0",
                    100: "#C5CAD9",
                    200: "#8B95B3",
                    300: "#5A6888",
                    400: "#2D3A5C",
                    500: "#162040",
                    600: "#0F172A",
                    700: "#0C1220",
                    800: "#0A0F1C",
                    900: "#060A14",
                    950: "#030508",
                },
                electric: {
                    DEFAULT: "#3B82F6",
                    light: "#60A5FA",
                    dark: "#2563EB",
                    glow: "rgba(59, 130, 246, 0.4)",
                },
                violet: {
                    DEFAULT: "#8B5CF6",
                    light: "#A78BFA",
                    dark: "#7C3AED",
                    glow: "rgba(139, 92, 246, 0.4)",
                },
                cyan: {
                    DEFAULT: "#06B6D4",
                    light: "#22D3EE",
                    glow: "rgba(6, 182, 212, 0.3)",
                },
                emerald: {
                    DEFAULT: "#10B981",
                    glow: "rgba(16, 185, 129, 0.3)",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
            },
            maxWidth: {
                container: "1280px",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "hero-gradient": "linear-gradient(135deg, #0A0F1C 0%, #162040 50%, #0F172A 100%)",
                "card-gradient": "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.08) 100%)",
                "cta-gradient": "linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%)",
                "glow-blue": "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
                "glow-violet": "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
            },
            animation: {
                "float": "float 6s ease-in-out infinite",
                "float-slow": "float 8s ease-in-out infinite",
                "float-slower": "float 10s ease-in-out infinite",
                "pulse-glow": "pulse-glow 3s ease-in-out infinite",
                "shimmer": "shimmer 2.5s linear infinite",
                "gradient-shift": "gradient-shift 8s ease infinite",
                "spin-slow": "spin 20s linear infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-12px)" },
                },
                "pulse-glow": {
                    "0%, 100%": { opacity: "0.4" },
                    "50%": { opacity: "1" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
                "gradient-shift": {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
            },
            boxShadow: {
                "glow-sm": "0 0 15px rgba(59, 130, 246, 0.15)",
                "glow-md": "0 0 30px rgba(59, 130, 246, 0.2)",
                "glow-lg": "0 0 60px rgba(59, 130, 246, 0.15)",
                "glow-violet": "0 0 30px rgba(139, 92, 246, 0.2)",
                "card": "0 4px 24px rgba(0, 0, 0, 0.12)",
                "card-hover": "0 8px 40px rgba(0, 0, 0, 0.2)",
            },
        },
    },
    plugins: [],
};
