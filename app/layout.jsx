import "./globals.css";

export const metadata = {
    title: "IT Alliance AI — Enterprise AI Architecture & Revenue Engineering",
    description:
        "IT Alliance AI builds AI-native revenue architectures that transform enterprise operations into intelligent, scalable growth systems.",
    keywords: [
        "AI consulting",
        "enterprise AI",
        "revenue architecture",
        "AI strategy",
        "digital transformation",
    ],
    openGraph: {
        title: "IT Alliance AI — Enterprise AI Architecture & Revenue Engineering",
        description:
            "We build AI-native revenue architectures that transform enterprise operations.",
        type: "website",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased">{children}</body>
        </html>
    );
}
