import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata = {
  title: 'IT Alliance AI - Revenue Architecture & Business Growth Systems',
  description: 'Integrated Revenue Architecture for Scalable Growth. Transform your business with structured growth systems, CRM intelligence, and sales automation.',
  keywords: 'Revenue Systems, CRM Infrastructure, Sales Automation, Growth Strategy, Business Consulting, Digital Transformation',
  authors: [{ name: 'IT Alliance AI' }],
  openGraph: {
    title: 'IT Alliance AI - Revenue Architecture & Business Growth Systems',
    description: 'Integrated Revenue Architecture for Scalable Growth. Aligning Paid Acquisition, SEO, CRM Intelligence, and Automation.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
